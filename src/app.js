const http = require('http');
const chalk = require('chalk'); /* 色彩化输出 */
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/router');
const openUrl = require('./helper/openUrl');

class Server {
    constructor (config) {
        /* 把自定义的conf和用户的config添加到一个新对象中 */
        this.conf = Object.assign({}, conf, config);
    }
    start () {
        http.createServer((req, res) => {
            /* 显示当前文件的相对路径 */
            const filePath = path.join(this.conf.root, req.url);
            route(req, res, filePath, this.conf); 
        }).listen(this.conf.port, this.conf.hostname, () => {
            const addr = `http://${this.conf.hostname}:${this.conf.port}`;
            console.info(`Server started at ${chalk.green(addr)}`);
            openUrl(addr);
        });
    }
}

module.exports = Server;