import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		ViteImageOptimizer({
			webp: {
				quality: 70
			},
			jpeg: {
				quality: 70
			}
		}),
		sveltekit()
	]
});
