import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react'

import { checker } from 'vite-plugin-checker'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

import path, { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const relativeAlias: Record<string, string> = {
	Components: './src/Components',
	Contexts: './src/Contexts',
	Utils: './src/Utils',
	Hooks: './src/Hooks',
	Constants: './src/Constants',
	Api: './src/Api',
	Pages: './src/Pages',
}

export const resolveAlias = Object.entries(relativeAlias).reduce(
	(prev: Record<string, string>, [key, path]) => {
		// eslint-disable-next-line security/detect-object-injection
		prev[key] = resolve(__dirname, path)

		return prev
	},
	{},
)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const envPrefix: string[] = ['APP_']

	const { PORT = 3000, OPEN_BROWSER = 'true' } = {
		...loadEnv(mode, process.cwd(), ''),
	}

	const base = mode === 'production' ? '/meeting-room-react/' : ''

	return {
		plugins: [
			mode === 'development' ? mkcert() : null,
			react(),
			svgr(),
			mode === 'development'
				? checker({
						typescript: true,
						eslint: {
							lintCommand: 'lint:check',
						},
					})
				: null,
			VitePWA({
				devOptions: {
					enabled: mode === 'development',
					type: 'module',
					navigateFallback: 'index.html',
				},
				registerType: 'prompt',
				workbox: {
					globPatterns: [
						'**/*.{js,css,html,ico,png,svg,webmanifest}',
					],
					globDirectory: path.join(__dirname, 'public'),
					cleanupOutdatedCaches: true,
					sourcemap: true,
					runtimeCaching: [
						{
							urlPattern: ({ url }) => {
								return [
									'.js',
									'.html',
									'.css',
									'.webmanifest',
									'.png',
									'.ico',
									'.svg',
								].some(suffix => url.pathname.endsWith(suffix))
							},
							handler: 'CacheFirst',
							options: {
								cacheName: 'static-cache',
								expiration: {
									maxEntries: 250,
									maxAgeSeconds: 60 * 60 * 24 * 365,
								},
							},
						},
					],
				},
				manifest: {
					start_url: '/index.html',
					name: 'Meeting Room React',
					short_name: 'Meeting Room',
					description: 'Meeting Room React',
					theme_color: '#458de6',
					orientation: 'landscape',
					display: 'fullscreen',
					icons: [
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-512x512.png`,
							sizes: '512x512',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-196x196.png`,
							sizes: '196x196',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-96x96.png`,
							sizes: '96x96',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-32x32.png`,
							sizes: '32x32',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-16x16.png`,
							sizes: '16x16',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-128.png`,
							sizes: '128x128',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x48.png`,
							sizes: '48x48',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x72.png`,
							sizes: '72x72',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x96.png`,
							sizes: '96x96',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x128.png`,
							sizes: '128x128',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x192.png`,
							sizes: '192x192',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x375.png`,
							sizes: '375x375',
							purpose: 'maskable',
						},
					],
				},
			}),
		],
		resolve: {
			alias: resolveAlias,
		},
		server: {
			port: PORT || 3000,
			open: OPEN_BROWSER === 'true' ? true : false,
		},
		envPrefix,
		build: {
			outDir: 'build',
		},
		base,
	}
})
