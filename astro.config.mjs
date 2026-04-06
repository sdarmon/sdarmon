import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // AJOUT

export default defineConfig({
    site: 'https://sashadarmon.fr',
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false // 'fr' reste à la racine, 'en' sera dans /en/
        }
    },
    integrations: [sitemap()], // AJOUT
});