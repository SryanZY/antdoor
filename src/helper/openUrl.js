const {exec} = require('child_process');

module.exports = url => {
    switch (process.platform) {
        /*mac系统*/
        case 'darwin':
            exec(`open ${url}`);
            break;
        case 'win32':
            exec(`start ${url}`);
            break;
        default:
            break;
    }
}