// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build
export default defineConfig({
  site: "https://piyanomini.vercel.app",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
