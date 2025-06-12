// postcss.config.js (ES Module syntax for "type": "module" in package.json)
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES Modules context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    plugins: {
        // Use the ES module version of the plugin import, and pass the config path
        '@tailwindcss/postcss': {
            config: path.resolve(__dirname, './ui/tailwind.config.js'),
        },
        autoprefixer: {},
    },
};