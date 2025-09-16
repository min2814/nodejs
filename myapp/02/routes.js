export function handleRoute(req, res) {
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.end('안녕하세요!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf8' });
        res.end('해당 경로를 찾을 수 없습니다');
    }
}

