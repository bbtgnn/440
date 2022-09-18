import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

//

const REPO_NAME = '440';

//

const prod = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// /docs because of github pages
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		paths: {
			base: prod ? `/${REPO_NAME}` : ''
		},

		// Needed for github pages
		trailingSlash: 'always'
	}
};

export default config;
