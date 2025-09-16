import http from 'http';
import url from 'url';
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true); // true → 객체로 파싱.
        const pathname = parsedUrl.pathname;
        const query = parsedUrl.query;
        if (pathname === '/') {
            const name = query.name || '익명';
            const age = query.age || '알 수 없음';
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end(`이름: ${name}, 나이: ${age}`);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('페이지를 찾을 수 없습니다');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('GET 요청만 허용됩니다');
    }
});
server.listen(3000, () => {
    console.log('GET 서버 실행 중: http://localhost:3000');
});
