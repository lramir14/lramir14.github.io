// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Ensure path is imported

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Set '@' to resolve to the project root (where vite.config.js is located)
            '@': path.resolve(__dirname, './'), // This matches your tsconfig.json base path
            // Remove or adjust other aliases if they conflict.
            // 'components': path.resolve(__dirname, './src/components') // This would be wrong if components is at root
            // If you *do* want an alias for 'components', it should point to './components'
            // 'components': path.resolve(__dirname, './components')
        }
    }
});