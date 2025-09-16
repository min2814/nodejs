import http from 'http';
import url from 'url';
import mysql from 'mysql2/promise';
import express from 'express';
import unitRouter from './routes/unit.js';
import nameRouter from './routes/name.js';
import districtRouter from './routes/district.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pool = mysql.createPool({  // ① 데이터베이스 연결
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
})

const getUser = async () => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM assembly_member ORDER BY row_num LIMIT 0,50;');  // ② SQL 실행
        // ③ 실행결과 출력
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};


app.use('/unit', unitRouter);
app.use('/name', nameRouter);
app.use('/district', districtRouter);

app.get('/', async (req, res) => {
    const rows = await getUser();
    // console.log(rows);
    res.status(200).type('html').send(JSON.stringify(rows));

});

app.listen(3000, () => {
    console.log('POST 서버 실행 중: http://localhost:3000');
});