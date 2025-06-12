// postcss.config.js
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    plugins: {
        '@tailwindcss/postcss': {
            // Explicitly point to your tailwind.config.js file
            // This path is relative to the postcss.config.js file
            config: path.resolve(__dirname, './ui/tailwind.config.js'),
        },
        autoprefixer: {},
    },
};