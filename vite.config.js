import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default {
	base: '/positivus',
	css: {
		devSourcemap: true,
		postcss: {
			plugins: [
				autoprefixer(),
			],
			sourceMap: true,
		},
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