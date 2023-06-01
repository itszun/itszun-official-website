import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {prismjsPlugin} from 'vite-plugin-prismjs';


export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        prismjsPlugin({
            "languages": ["javascript", "css", "markup"],
            "plugins": ["line-numbers"],
            "theme": "twilight",
            "css": true
        })
    ],
});
