module.exports = {
    root: process.cwd(),
    hostname: '127.0.0.1',
    port: 8001,
    compress: /\.(html|js|css|md|vue)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}