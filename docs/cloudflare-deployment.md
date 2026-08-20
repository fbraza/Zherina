# Cloudflare Workers deployment and DNS migration

This runbook moves the Zhirena Astro website to Cloudflare Workers and moves authoritative DNS from OVH to Cloudflare without moving the domain registration or disrupting Microsoft 365 or Resend mail. The canonical production URL is `https://www.zhirena.com`; `zhirena.com` redirects to it.

This is an execution plan, not authorization to change production. Record the operator, UTC time, commit SHA, Cloudflare Worker name, assigned `workers.dev` URL, OVH nameservers, Cloudflare nameservers, and test results in the change ticket.

## Target state

- OVH remains the registrar.
- Cloudflare is authoritative for DNS.
- A Cloudflare Worker serves `www.zhirena.com` as a Custom Domain.
- A Cloudflare Single Redirect sends both HTTP and HTTPS apex requests to HTTPS `www`, preserving path and query string.
- Microsoft 365 continues to receive apex mail and authenticate outbound mail.
- Resend continues to authenticate mail and handle the `send` return-path subdomain.
- Git pushes to the production branch deploy through Workers Builds; non-production builds use preview versions.

## Stop conditions

Stop rather than improvise if any of these conditions is true:

- The `workers.dev` deployment or contact form test fails.
- The current OVH export differs from the inventory below and the difference has not been explained.
- Cloudflare's zone is missing any non-web OVH record.
- The Microsoft 365 admin center reports a DNS error before cutover.
- DNSSEC is enabled at OVH/the registrar and its old DS record has not been removed and allowed to expire.
- The OVH zone cannot be kept intact for rollback.
- The person performing the change cannot edit both OVH nameservers and Cloudflare DNS/Workers.

## 1. Prepare the Worker deployment

The repository is configured for Cloudflare Workers with Astro 6, `@astrojs/cloudflare`, and a committed Wrangler configuration. Before using this runbook, review the deployment change and confirm that it:

1. Uses the Astro-6-compatible `@astrojs/cloudflare` adapter rather than the Node adapter.
2. Includes a Wrangler configuration for a Workers Static Assets/SSR deployment and locks Wrangler through `package-lock.json`.
3. Keeps Astro's `output: "server"` behavior and the existing `astro:env/server` contract while prerendering the homepage.
4. Provides reproducible `npm run build` and `npm run deploy` commands. Do not rely on Wrangler's automatic configuration PR for production.
5. Passes the local build and Worker-compatible preview/test path, including `POST /api/contact`.

Astro 6 determines the Cloudflare environment at build time. If named Wrangler environments are introduced, build each environment separately with `CLOUDFLARE_ENV=<name>`; do not build once and deploy the same output with a different `--env` flag.

### Bootstrap runtime secrets and connect Git

The committed Wrangler configuration declares all three secrets as required. Wrangler therefore blocks a deployment when any secret is absent. A new Git-imported Worker cannot satisfy that check because it does not exist yet, so bootstrap the Worker and its secrets before connecting the repository.

After the deployment change is reviewed and pushed:

1. In Cloudflare, open **Workers & Pages > Create application**, create a starter Worker named exactly `zhirena`, and deploy the generated starter. Do not add a custom domain.
2. Open the `zhirena` Worker and go to **Settings > Variables & Secrets**. Add these three values as encrypted runtime secrets:

| Secret | Purpose |
| --- | --- |
| `CONTACT_EMAIL` | Recipient for website enquiries |
| `RESEND_API_KEY` | Resend API credential |
| `RESEND_FROM_EMAIL` | Verified sender used by the contact endpoint |

3. Enter approved values from the secret manager; never put their values in Git, Wrangler configuration, build logs, screenshots, or this document. Confirm all three names appear in the Worker's runtime settings.
4. In the existing Worker, open **Settings > Builds**, select **Connect**, and authorize the GitHub account with least privilege to `fbraza/zherina`.
5. Select the repository. Use the repository root (leave **Root directory** empty), the intended production branch (normally `main`), and confirm that the dashboard Worker name matches the `zhirena` name in `wrangler.jsonc`.
6. Configure:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Non-production branch deploy command: `npx wrangler versions upload`
7. Confirm the build uses Node 22.12 or newer, as required by the repository and Astro 6.
8. Push a commit to trigger the first repository build, then confirm it replaces the starter with the expected application on the `workers.dev` route. Keep preview URLs enabled and do not add a custom domain yet.

Workers Builds **build variables/secrets are build-time only** and do not become Worker runtime bindings. Do not duplicate the Resend values in build settings. If preview versions need to send mail, use separately scoped non-production runtime secrets; otherwise do not qualify contact delivery on previews.

## 2. Qualify the `workers.dev` deployment

The DNS migration is blocked until one deployed commit passes every check below on its assigned `https://<worker>.<account>.workers.dev` URL.

- [ ] The Workers Builds log installs dependencies, builds, and deploys without warnings that indicate missing assets, adapter mismatch, or unavailable Node APIs.
- [ ] Record the deployed Git commit SHA and Worker version/deployment ID.
- [ ] `curl -fsS -o /dev/null -w '%{http_code}\n' "$STAGING_URL/"` returns `200`.
- [ ] Main navigation, responsive layout, fonts, images, CSS, and JavaScript work in a clean browser session.
- [ ] Every public route and a deliberately missing route return the intended status and content.
- [ ] Browser developer tools show no failed first-party asset requests or uncaught errors.
- [ ] Submit the contact form with a unique subject/name marker. The UI reports success, `POST /api/contact` returns `200`, Resend records a successful send, and the message reaches `CONTACT_EMAIL` with Reply-To set to the submitted address.
- [ ] Submit invalid form data and confirm `POST /api/contact` returns `400` without sending mail.
- [ ] Confirm no runtime secret value appears in HTML, JavaScript, response headers, or build/runtime logs.
- [ ] A second deployment from the production branch succeeds, proving Git integration rather than a one-off manual upload.

Keep `workers.dev` enabled through migration and rollback validation. It is the origin-independent diagnostic URL.

## 3. Inventory and stage DNS

Export the complete OVH zone immediately before migration and save it with the change ticket. The table is a verification baseline observed publicly on 2026-08-20, **not a substitute for that fresh export**. Preserve every current record unless this runbook explicitly identifies it as a legacy web record.

| Type | Name | Value/target | Priority | Cloudflare proxy | Action |
| --- | --- | --- | ---: | --- | --- |
| A | `@` | `213.186.33.5` | — | DNS only initially | Keep until production cutover |
| TXT | `@` | `1\|www.zhirena.com` | — | n/a | OVH redirect metadata; keep until production cutover |
| A | `www` | `213.186.33.5` | — | DNS only initially | Keep until production cutover |
| TXT | `www` | `3\|welcome` | — | n/a | OVH redirect metadata; keep until production cutover |
| MX | `@` | `zhirena-com.mail.protection.outlook.com` | `0` | n/a | Preserve exactly |
| TXT | `@` | `v=spf1 include:spf.protection.outlook.com -all` | — | n/a | Preserve as the single apex SPF record |
| TXT | `@` | `MS=ms17981676` | — | n/a | Preserve Microsoft verification |
| CNAME | `autodiscover` | `autodiscover.outlook.com` | — | **DNS only** | Preserve |
| CNAME | `selector1._domainkey` | `selector1-zhirena-com._domainkey.rndbio.p-v1.dkim.mail.microsoft` | — | **DNS only** | Preserve Microsoft DKIM |
| CNAME | `selector2._domainkey` | `selector2-zhirena-com._domainkey.rndbio.p-v1.dkim.mail.microsoft` | — | **DNS only** | Preserve Microsoft DKIM |
| TXT | `resend._domainkey` | Current full `p=...` value from OVH/Resend | — | n/a | Copy byte-for-byte; do not reconstruct |
| MX | `send` | `feedback-smtp.eu-west-1.amazonses.com` | `10` | n/a | Preserve Resend return path |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | — | n/a | Preserve Resend SPF |

Cloudflare cannot proxy MX or TXT records. All mail-related CNAMEs must be gray-cloud **DNS only**; proxying `autodiscover` or either DKIM selector will break service or verification. Do not combine the apex Microsoft SPF with the `send` SPF: they apply to different names. Do not create a second apex SPF record.

### Stage the Cloudflare zone

1. Add `zhirena.com` to the Cloudflare account using a full DNS setup. Do not change nameservers yet.
2. Import the fresh OVH export, then compare Cloudflare and OVH record-by-record: type, owner/name, target/value, MX priority, and effective TTL. Cloudflare may normalize trailing dots and TXT quoting; compare the DNS payload rather than presentation.
3. Correct proxy status. Leave the legacy apex and `www` A records DNS only before cutover. Mark every mail-related CNAME DNS only.
4. Query each of Cloudflare's assigned nameservers directly before delegation and compare answers with OVH. Include apex `A`, `MX`, and all `TXT`; `www`; `autodiscover`; both Microsoft DKIM selectors; `resend._domainkey`; and `send` `MX`/`TXT`.
5. If practical, lower relevant OVH TTLs 24–48 hours before the window, then wait out the old TTL. This is optional and does not replace direct nameserver checks.
6. Check DNSSEC at OVH and at the `.com` parent. If enabled, remove the old DS record at OVH and wait for its TTL to expire before changing nameservers. Verify that `dig DS zhirena.com` returns no stale DS. Enable Cloudflare DNSSEC only after Cloudflare is authoritative and stable, then publish Cloudflare's new DS at OVH.

## 4. Pre-cutover gate

Immediately before touching authoritative DNS, two people should verify and record:

- [ ] The exact production candidate still passes all `workers.dev` checks.
- [ ] The candidate commit is the expected production branch HEAD.
- [ ] The three runtime secret names exist in the production Worker.
- [ ] The complete OVH zone export and current OVH nameservers are saved.
- [ ] Cloudflare's zone contains every OVH record; only documented presentation differences remain.
- [ ] Direct queries to both assigned Cloudflare nameservers return the expected mail records in the table.
- [ ] `resend._domainkey` matches the complete OVH/Resend value, not a truncated display value.
- [ ] `autodiscover`, `selector1._domainkey`, and `selector2._domainkey` are DNS only.
- [ ] The apex has exactly one SPF TXT record and its value is `v=spf1 include:spf.protection.outlook.com -all`.
- [ ] Microsoft 365 reports the domain healthy; inbound and outbound test mail works before the window.
- [ ] Resend reports its domain/records verified before the window.
- [ ] Any old DNSSEC DS has expired.
- [ ] The rollback operator has access to both OVH and Cloudflare.

## 5. Activate Cloudflare DNS

This phase changes DNS authority but deliberately leaves the old website records in place.

1. At OVH's registrar nameserver settings, replace `dns106.ovh.net` and `ns106.ovh.net` with the two nameservers assigned by Cloudflare. Do not transfer the registration.
2. Wait for Cloudflare to mark the zone **Active**. Query several public resolvers and `dig +trace zhirena.com NS`; continue only when the parent delegation and public answers use Cloudflare.
3. Confirm the site still resolves to the legacy OVH web destination through the copied apex/`www` A and redirect TXT records.
4. Repeat all Microsoft 365 and Resend DNS queries. Send one external message to a Zhirena Microsoft 365 mailbox and one message from that mailbox to an external account. Confirm both arrive and inspect authentication results.
5. If mail records are absent or wrong, restore them in Cloudflare immediately. If the zone is broadly incomplete, use the rollback procedure rather than proceeding to web cutover.

Allow a short observation period after activation. Nameserver activation and website cutover are separate gates.

## 6. Cut over the production hostname

Cloudflare Custom Domains require an active zone and create their own DNS record and certificate. The existing `www` A record therefore has to be removed at this point, not earlier.

1. In the Worker, open **Settings > Domains & Routes > Add > Custom Domain**.
2. Remove the legacy DNS-only `www A 213.186.33.5` record when prompted/just before adding the domain, then add `www.zhirena.com` as the Custom Domain. Do not create a competing CNAME manually.
3. Wait until the Custom Domain is active and its Cloudflare-managed certificate is issued. Verify `https://www.zhirena.com/` serves the same candidate commit as `workers.dev`.
4. Create a Cloudflare **Single Redirect** named `apex-to-www`:
   - Match expression: `(http.host eq "zhirena.com")`
   - Dynamic target: `concat("https://www.zhirena.com", http.request.uri.path)`
   - Status: `301`
   - Preserve query string: enabled
5. Replace the legacy apex `A 213.186.33.5` with proxied (orange-cloud) `A @ 192.0.2.0`. This is Cloudflare's reserved placeholder for an originless redirect; proxied requests do not reach that address.
6. Remove only the two OVH redirect TXT records: apex `1|www.zhirena.com` and `www` `3|welcome`. Do **not** remove the other apex TXT records.

Verify the canonical behavior without relying on a browser's cached 301:

```sh
curl -sSI http://zhirena.com/
curl -sSI https://zhirena.com/
curl -sSI 'https://zhirena.com/contact?source=cutover'
curl -sSI https://www.zhirena.com/
```

Both apex schemes must redirect to HTTPS `www`; the deep-link response must be `301` with `Location: https://www.zhirena.com/contact?source=cutover`; `www` must return the application response without a canonical-host loop. Confirm a `cf-ray` response header and a valid certificate for both hostnames.

## 7. Post-cutover verification

- [ ] Repeat every functional and visual check from the `workers.dev` gate on `https://www.zhirena.com`.
- [ ] Submit one uniquely identifiable production contact enquiry. Confirm UI success, HTTP `200`, successful Resend activity, inbox delivery to `CONTACT_EMAIL`, correct sender, and Reply-To.
- [ ] Confirm an invalid production submission is rejected and does not send.
- [ ] Query apex MX/TXT, autodiscover, both Microsoft DKIM selectors, Resend DKIM, and `send` MX/TXT from at least two public resolvers.
- [ ] In Microsoft 365, rerun domain DNS diagnostics. Send inbound and outbound messages and inspect headers for expected SPF and DKIM results.
- [ ] In Resend, confirm the domain remains verified and the production contact message is delivered rather than bounced.
- [ ] Confirm `www` is a Cloudflare-managed Worker Custom Domain and apex is proxied only for the redirect.
- [ ] Check Worker logs/observability for exceptions and unexpected 4xx/5xx responses.
- [ ] Record final Worker deployment ID, DNS results, redirect headers, mail message IDs (not message contents), and completion time.

After the migration has remained stable beyond the agreed rollback window, restore normal TTLs if they were lowered. Enable Cloudflare DNSSEC and add its DS record at OVH in a separate controlled step; verify with `dig +dnssec zhirena.com SOA` after propagation.

## Rollback

Prefer the smallest rollback that addresses the failure. Runtime/application failures do not require a nameserver rollback; mail failures do not require changing Worker deployment.

### Worker release failure

In **Workers & Pages > Worker > Deployments**, roll back to the last known-good Worker version. Keep the `www` Custom Domain attached and retest both `workers.dev` and production. If the failure is a runtime secret configuration error, correct the runtime secrets from the secret manager and retest; never expose values while diagnosing.

### Website cutover failure with healthy Cloudflare DNS

This is the fastest web rollback and avoids nameserver propagation:

1. Disable the `apex-to-www` Single Redirect.
2. Remove the `www.zhirena.com` Custom Domain from the Worker.
3. Restore DNS-only `A @ 213.186.33.5` and `A www 213.186.33.5` in Cloudflare.
4. Restore TXT `@ 1|www.zhirena.com` and TXT `www 3|welcome` exactly as exported from OVH.
5. Verify the old site/redirect behavior and all mail records. Do not alter Microsoft 365 or Resend records.

### Authoritative DNS or mail failure

If Cloudflare DNS cannot be corrected quickly, restore the original OVH nameservers at the OVH registrar. The unchanged OVH zone must remain available for this purpose. Expect resolver caches to follow their NS TTLs; monitor both authorities during convergence.

If Cloudflare DNSSEC has been enabled, remove Cloudflare's DS at OVH first and keep Cloudflare zone signing enabled until that DS TTL expires before changing nameservers. Changing nameservers while a mismatched DS remains can cause validating resolvers to return `SERVFAIL`. After OVH is authoritative again, restore OVH's prior DNSSEC state in a separate verified step.

After any rollback, repeat website, apex redirect, Microsoft 365 inbound/outbound, Microsoft DNS diagnostics, Resend verification, and contact delivery checks. Preserve logs and timestamps, and do not retry cutover until the failure has a confirmed cause.

## References

- [Cloudflare: deploy Astro to Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Astro: Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Cloudflare: Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Cloudflare: Worker Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Cloudflare: redirect root to `www`](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-root-to-www/)
- [Cloudflare: full DNS setup and nameserver change](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
- [Cloudflare: DNSSEC migration](https://developers.cloudflare.com/dns/dnssec/)
- [Microsoft: DNS records for Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/enterprise/external-domain-name-system-records)
