import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ["http://127.0.0.1:8000/"],
  }
});
