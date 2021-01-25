import vue from '@vitejs/plugin-vue'
import {
    defineConfig
} from "vite"

/**
 * @type {import('vite').UserConfig}
 */

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 7070,
        // proxy: {
        //     // string shorthand
        //     '/home': 'http://localhost:4567/foo',
        //     // with options
        //     '/api': {
        //         target: 'http://jsonplaceholder.typicode.com',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     },
        //     // with RegEx
        //     '/fallback/.*': {
        //         target: 'http://jsonplaceholder.typicode.com',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/fallback/, '')
        //     }
        // }
    }
})