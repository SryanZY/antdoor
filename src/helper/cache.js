const {cache} = require('../config/defaultConfig');

function refreshRes (stats, res) {
    const {maxAge, expires, cacheControl, lastModified, etag} = cache;

    /* 本地校验，现在大多使用cacheControl */
    if (expires) {
        res.setHeader('Expires', (new Date(Date.now() + maxAge * 1000)).toUTCString());
    }
    if (cacheControl) {
        res.setHeader('Cache-Control', `public, max-age=${maxAge}`);
    }
    /* 向服务器校验 */
    if (lastModified) {
        res.setHeader('Last-Modified', stats.mtime.toUTCString());
    }
    if (etag) {
        res.setHeader('ETag', stats.mtime.toUTCString());
        /* stats.mtime- 修改时间 */
    }
}

module.exports = function isFresh (stats, req, res) {
    refreshRes(stats, res);

    const lastModified = req.headers['if-modified-since'];
    const etag = req.headers['if-none-match'];

    /* 首次请求 */
    if (!lastModified && !etag) {
        return false;
    }

    if (lastModified && lastModified !== res.getHeader('Last-Modified')) {
        return false;
    }

    if (etag && etag !== res.getHeader('ETag')) {
        return false;
    }

    return true;
}
