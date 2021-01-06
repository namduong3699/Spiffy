export default function () {
    this.nuxt.hook('render:route', (url, result, { req, res }) => {
        res.cookie('XSRF-TOKEN', req.csrfToken(), {});
    });
}
