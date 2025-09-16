import http from 'http';
const server = http.createServer((req, res) => {
    try {
        if (req.url === '/error') throw new Error('강제 에러');
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('정상 작동');
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('서버 내부 오류');
    }
});
server.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});
