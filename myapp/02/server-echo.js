import http from 'http';
import url from 'url';
import handleEcho from './echo.js';

const server = http.createServer((req, res) => {
    const obj = url.parse(req.url, true);
    const query = obj.query;
    if (obj.pathname == '/echo') {
        handleEcho(req, res, query);
    }

})
server.listen(3000);