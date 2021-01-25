import vue from '@vitejs/plugin-vue'
import {
    defineConfig
} from "vite"

/**
 * @type {import('vite').UserConfig}
 */

const path = require('path');
 export default defineConfig({
    plugins: [vue()],
    server: {
        port: 7070,
        // pluginOptions:{
        //     'style-resources-loader': {
        //         preProcessor: 'less',
        //         patterns: [path.resolve(__dirname, './src/assets/css/home.less')],
        //       }
        // }
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