// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
	site: 'https://damet-page.pages.dev',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()]
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Martian Mono',
			cssVariable: '--font-martian-mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						weight: '100 800',
						style: 'normal',
						src: ['./src/assets/fonts/martian-mono.woff2'],
						display: 'swap',
					},
				],
			},
		},
	],
});
