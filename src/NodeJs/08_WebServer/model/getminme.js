exports.getMime = function (estName) {
    switch (estName) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/js';
        default:
            return 'text/html';
    }
}
