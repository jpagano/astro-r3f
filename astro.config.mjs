import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://jpagano.github.io",
	base: "astro-r3f",
	integrations: [react()],
});
