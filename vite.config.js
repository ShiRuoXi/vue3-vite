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
    }
})