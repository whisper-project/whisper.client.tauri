import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// SPA: https://svelte.dev/docs/kit/single-page-apps
	// for Tauri: https://v2.tauri.app/start/frontend/sveltekit/
	kit: {
		adapter: adapter({
			fallback: 'index.html' // may differ from host to host
		})
	}
};

export default config;
