import http from 'http';
import url from 'url';
const server = http.createServer((req, res) => {
    const obj = url.parse(req.url, true);
    const pathname = obj.pathname;
    try {

        if (pathname === '/info') {
            const now = new Date();
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end(now.toString());
        }
        else if (pathname === '/exit') {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('종료합니다');
        }
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('서버 내부 오류');
    }
});
server.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});
