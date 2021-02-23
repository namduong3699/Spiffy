import {
    cleanEnv, str, url, host, port,
} from 'envalid';

const validEnv = cleanEnv(process.env, {
    APP_ENV: str({
        devDefault: 'local',
        desc: 'Application env',
    }),

    APP_URL: url({
        desc: 'App url',
    }),

    HOST: host({
        default: '0.0.0.0',
        desc: 'Application host',
    }),

    PORT: port({
        default: 8000,
        desc: 'Application port',
    }),

    API_BASE_URL: str({
        default: '/api',
        desc: 'API rewrite entrypoint',
    }),

    IMAGE_BASE_URL: url({
        desc: 'Base url for images',
    }),

    ANALYTICS_TRACK_ID: str({
        desc: 'Google tracking ID for Analytics',
        devDefault: 'UA-00000000-0',
    }),
}, {
    strict: true,
});

export const {
    APP_ENV,
    APP_URL,
    HOST,
    PORT,
    API_BASE_URL,
    IMAGE_BASE_URL,
    ANALYTICS_TRACK_ID,
    isDev,
    isProduction,
} = validEnv;
