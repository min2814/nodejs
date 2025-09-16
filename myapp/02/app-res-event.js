import http from 'node:http';
const server = http.createServer((req, res) => {
    res.on('finish', () => {
        console.log('[finish] 응답이 성공적으로 완료되었습니다');
    });
    res.on('close', () => {
        console.log('[close] 연결이 닫혔습니다 (중간 중단일 수 있음)');
    });
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>응답을 보내는 중...</h1>');
    setTimeout(() => {
        res.end('<h2>응답 종료</h2>');
    }, 3000); // 일부러 응답 지연
    res.on('error', (err) => {
        console.error('응답 중 오류 발생:', err);
    });
});
server.listen(3000, () => {
    console.log('http://localhost:3000 테스트 중');
});

