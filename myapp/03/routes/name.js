import express from 'express';
import mysql from 'mysql2/promise';

const router = express.Router();


const pool = mysql.createPool({  // ① 데이터베이스 연결
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
})

const getUser = async (name) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM assembly_member WHERE hg_nm LIKE ?'
            , [`%${name}%`]);  // ② SQL 실행
        // ③ 실행결과 출력
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};

router.get('/', (req, res) => {
    res.send('김 포함 의원 명단');
});

router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const rows = await getUser(name);
    console.log(rows);
    res.send(`${JSON.stringify(rows)}`);
});

export default router;