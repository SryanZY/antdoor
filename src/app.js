const http = require('http');
const chalk = require('chalk'); /* 色彩化输出 */
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/router');

http.createServer((req, res) => {
    /* 显示当前文件的相对路径 */
    const filePath = path.join(conf.root, req.url);
    route(req, res, filePath); 
}).listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});
