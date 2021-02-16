import {
    cleanEnv, str, host, port, url, bool,
} from 'envalid';
import { base64str } from './validators';
import { readEnv } from './utils';

const env = readEnv('.env');

const validEnv = cleanEnv(env, {
    APP_KEY: base64str({
        desc: 'Encryption key',
    }),

    APP_DEBUG: bool({
        desc: 'Attach node debugger',
        default: false,
    }),

    API_HOST: url({
        desc: 'API host for server requests',
    }),

    SSO_HOST: str({
        desc: 'SSO host',
    }),

    SSO_SERVER_HOST: url({
        default: env.SSO_HOST,
        desc: 'SSO host for server requests',
    }),

    SSO_NONCE_COOKIE: str({
        default: 'spiffy_session_nonce',
        desc: 'The cookie used to sync the log in session',
    }),

    REDIS_HOST: host({
        default: '127.0.0.1',
        desc: 'Redis host',
    }),

    REDIS_PORT: port({
        default: 6379,
        desc: 'Redis port',
    }),

    REDIS_PASSWORD: str({
        default: '',
        desc: 'Redis password',
    }),
}, {
    strict: true,
    dotEnvPath: null,
});

export const {
    APP_KEY,
    APP_DEBUG,
    API_HOST,
    SSO_HOST,
    SSO_NONCE_COOKIE,
    SSO_SERVER_HOST,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
} = validEnv;
