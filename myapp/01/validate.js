import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {

    res.setHeader('content-type', 'text/plain; charset=utf8');
    const obj = url.parse(req.url, true);
    const query = obj.query;
    const pathname = obj.pathname;
    const x = query.x;
    const y = query.y;

    console.log(query);
    try {
        if (pathname === '/add')
            if (isNaN(Number(x)) || isNaN(Number(y))) {
                res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf8' });
                res.end('400 Bad Request');
            }
            else {
                const sum = Number(x) + Number(y);
                res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
                res.end(sum.toString());  //res.end가 문자열
            }

    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('서버 내부 오류');
    }
});
server.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});




// 3. 다음 코드에서 잘못된 부분을 찾고 고쳐보세요.
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home');
//     }
// });


// 4. 응답결과에 한글 깨짐 현상이 생기지 않도록 수정해보세요.
// const server = http.createServer((req, res) => {
// res.setHeader('content-type', 'text/plain; charset=utf8');
//     res.writeHead('200');
//     res.end('완료');
// });





