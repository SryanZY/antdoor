const {createGzip, createDeflate} = require('zlib'); /*引入node封装的压缩zlib*/

module.exports = (rs, req, res) => {
    /* 获取浏览器中定义的request-headers*/
    const acceptEncoding = req.headers['accept-encoding'];
    /*\b单字匹配，准确的匹配出gzip或者deflate*/
    if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
        return rs;
    } else if (acceptEncoding.match(/\bgzip\b/)) {
        res.setHeader('Content-Encoding', 'gzip');
        return rs.pipe(createGzip());
    } else if (acceptEncoding.match(/\bdeflate\b/)) {
        res.setHeader('Content-Encoding', 'deflate');
        return rs.pipe(createDeflate());
    }
};
