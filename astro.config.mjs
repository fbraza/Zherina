import node from "@astrojs/node";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
    output: "server",
    adapter: node({ mode: "standalone" }),
    env: {
        schema: {
            CONTACT_EMAIL: envField.string({ context: "server", access: "secret" }),
            RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
            RESEND_FROM_EMAIL: envField.string({ context: "server", access: "secret" }),
        },
    },
});
