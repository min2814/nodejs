//클라이언트가 URL로 전달한 모든 쿼리 문자열을 JSON 형태로 만들어 응답
//JSON.stringify() 사용


import http from 'node:http';
import url from 'node:url';
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true);
        console.log(parsedUrl);

        const pathname = parsedUrl.pathname;
        console.log(pathname);

        const query = parsedUrl.query;
        console.log(query);

        if (pathname === '/') {
            const city = query.city || '서울';
            const weather = query.weather || '맑음';
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end(JSON.stringify(query));
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf8' });
            res.end('GET 요청만 허용됩니다');
        }
    }
});

server.listen(3000, () => {
    console.log('GET 서버 실행 중: http://localhost:3000');

});