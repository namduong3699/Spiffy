import * as sntp from '../libs/sntp';

export default ctx => Promise.all([
    ctx.store.dispatch('nuxtClientInit', ctx),
    sntp.sync(),
]);
