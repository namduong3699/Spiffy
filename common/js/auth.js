import WebAuth from '@bit/viblo.accounts.auth.web';

export default new WebAuth({
    domain: process.env.SSO_HOST,
    service: 'code',
});
