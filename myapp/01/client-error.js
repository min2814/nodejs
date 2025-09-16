import http from 'http';
const server = http.createServer((req, res) => {
    try {
        if (req.url === '/hello') {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('정상 작동');
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('404 Not Found');
        }

    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('서버 내부 오류');
    }
});
server.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});