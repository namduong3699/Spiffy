import express from 'express';
import passport from 'passport';
import { Strategy, sso } from '@bit/viblo.accounts.auth.express';
import { SSO_SERVER_HOST, SSO_HOST, SSO_NONCE_COOKIE } from '../env';
import { getApiToken } from '../api/auth';

const router = express.Router();

passport.use('viblo-sso', new Strategy({
    host: SSO_SERVER_HOST,
    service: 'battle',
    nonceCookie: SSO_NONCE_COOKIE,
}, getApiToken));

router.use(passport.initialize());

router.get('/serviceLogin/callback', (req, res, next) => {
    passport.authenticate('viblo-sso', (err, _, info) => {
        if (err) {
            throw err;
        }

        res.cookie('viblo_battle_auth', info.token, { httpOnly: true, maxAge: 31536000000 });

        return res.redirect(req.query.continue || '/');
    })(req, res, next);
});

router.use(sso({
    domain: SSO_HOST,
    service: 'battle',
    cookie: 'viblo_battle_auth',
    nonceCookie: SSO_NONCE_COOKIE,
}));

export default router;
