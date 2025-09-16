import http from 'http';

const server = http.createServer((req, res) => {
    try {
        if (req.url === '/hello') {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('안녕하세요');
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('페이지 없음');
        }
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('서버 내부 오류');
    }
});
server.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});
