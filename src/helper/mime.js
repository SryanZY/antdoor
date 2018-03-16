/**
 * 定义常见的MiME类型
 */
const path = require('path');
const mimeTypes = {
    "conf": "text/plain",
    "cpp": "text/plain",
    "css": "text/css",
    "dhtml": "text/html",
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "gif": "image/gif",
    "htm": "text/html",
    "html": "text/html",
    "hts": "text/html",
    "ico": "image/x-icon",
    "ief": "image/ief",
    "ifm": "image/gif",
    "jpe": "image/jpeg",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "jpz": "image/jpeg",
    "js": "application/x-javascript",
    "mp3": "audio/mpeg",
    "mp4": "video/mp4",
    "pdf": "application/pdf",
    "png": "image/png",
    "proxy": "application/x-ns-proxy-autoconfig",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tif": "image/tiff",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "audio/x-ms-wmv",
    "xml": "text/plain",
    "xml": "application/xml",
    "zip": "application/zip",
    "json": "application/json"
}

module.exports = filePath => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if (!ext) {
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['txt'];
}