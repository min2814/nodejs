import http from 'http';
import url from 'url';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({  // ① 데이터베이스 연결
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
})

const saveUser = async (id, name, age) => {
    try {
        const [rows] = await pool.query(
            'INSERT INTO 고객 (고객아이디,이름,나이) VALUES (?,?,?)',
            [id, name, age]);  // ② SQL 실행
        console.log(rows);  // ③ 실행결과 출력
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};



const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/plain; charset=utf8');
    const url객체 = url.parse(req.url, true);
    const query = url객체.query;
    const id = query.id;
    const name = query.name;
    const age = query.age;
    saveUser(id, name, age);

    res.end("등록 완료");
});
//     if (req.method === 'POST') {

//         let body = '';
//         // post 요청 데이터는 조각(chunk) 단위로 쪼개어져서 도착되므로 하나로 합침
//         req.on('data', chunk => {
//             body += chunk;
//         });

//         if (req.url === '/hello') {

//             req.on('end', () => {
//                 const params = new URLSearchParams(body); // body: "name=joyvit"
//                 const name = params.get('name');
//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.end(`안녕하세요, ${name}님!`);
//             });
//         }
//         else {
//             res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf8' });
//             res.end('누구신가요?');
//         }
//     }
//     else {
//         res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf8' });
//         res.end('post로 접속해줘');
//     }
// });


server.listen(3000, () => {
    console.log('POST 서버 실행 중: http://localhost:3000');
});