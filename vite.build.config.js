import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint(), svgr()],
    base: '/test-ams/', // This is the name of the repository on GitHub needed for deployment on GitHub Pages
});
