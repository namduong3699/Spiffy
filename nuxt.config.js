import path from 'path';

import openGraph from './nuxt/og';
import head from './nuxt/head.json';
import { mergeWithArrayConcat } from './nuxt/utils';

import {
    APP_ENV,
    HOST,
    PORT,
    APP_URL,
    API_BASE_URL,
    IMAGE_BASE_URL,
    ANALYTICS_TRACK_ID,
    isProduction,
} from './nuxt/env';

export default {
    telemetry: false,
    ssr: false,

    dev: !isProduction,

    srcDir: path.resolve(__dirname, 'src'),

    loading: '~/components/Loading.vue',

    loadingIndicator: {
        name: 'wandering-cubes',
        color: '#3E6F8D',
    },

    env: {
        APP_URL,
        API_BASE_URL,
        IMAGE_BASE_URL,
        ANALYTICS_TRACK_ID,
    },

    head: mergeWithArrayConcat({}, head, openGraph),

    css: [
        'tippy.js/themes/google.css',
        '@fortawesome/fontawesome-free/css/all.css',
        '~/assets/scss/index.scss',
    ],

    plugins: [
        '~/plugins/components',
        '~/plugins/directives',
        '~/plugins/element-ui',
        '~/plugins/filters',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/google-analytics',
        '@nuxtjs/robots',
        '~/modules/csrf',
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: isProduction,

        uglify: {
            cache: path.resolve(__dirname, '.build-cache/webpack-uglify'),
            sourceMap: true,
        },

        plugins: [],

        extend: (...args) => require('./nuxt/extend').default(...args),
    },

    server: {
        host: HOST,
        port: PORT,
    },

    styleResources: {
        scss: [],
    },

    render: {
        http2: {
            push: true,
        },
    },

    robots: [
        {
            UserAgent: '*',
            Disallow: APP_ENV === 'production' ? [
                '/*.json',
                '/*.xml',
            ] : '/',
        },
    ],
};
