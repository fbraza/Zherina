import cloudflare from "@astrojs/cloudflare";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
    site: "https://www.zhirena.com",
    output: "server",
    adapter: cloudflare({ imageService: "compile" }),
    env: {
        schema: {
            CONTACT_EMAIL: envField.string({ context: "server", access: "secret" }),
            RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
            RESEND_FROM_EMAIL: envField.string({ context: "server", access: "secret" }),
        },
    },
});
