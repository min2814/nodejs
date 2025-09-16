import http from 'http';
import url from 'url';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({  // ① 데이터베이스 연결
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
})

const getUser = async () => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM 고객');  // ② SQL 실행
        // ③ 실행결과 출력
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};

const server = http.createServer(async (req, res) => {
    res.setHeader('content-type', 'application/json; charset=utf8');
    const rows = await getUser();
    console.log(rows);

    res.end(JSON.stringify(rows));
});

server.listen(3000, () => {
    console.log('POST 서버 실행 중: http://localhost:3000');
});