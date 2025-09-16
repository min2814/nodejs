import http from 'http';
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        // post 요청 데이터는 조각(chunk) 단위로 쪼개어져서 도착되므로 하나로 합침
        req.on('data', chunk => {
            console.log(chunk);
            body += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`받은 데이터: ${body}`);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('POST 요청만 허용됩니다');
    }
});
server.listen(3000, () => {
    console.log('POST 서버 실행 중: http://localhost:3000');
});
