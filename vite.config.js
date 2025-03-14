import { defineConfig } from 'vite';

export default {
	base: '/positivus',
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				sourceMap: true,
			},
		},
	},
	build: {
		sourcemap: true,
	},
}