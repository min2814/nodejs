import express from 'express';
import mysql from 'mysql2/promise';

const router = express.Router();


const pool = mysql.createPool({  // ① 데이터베이스 연결
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
})

const getUser = async (id) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM assembly_member WHERE orig_nm LIKE ?'
            , [`%${id}%`]);  // ② SQL 실행
        // ③ 실행결과 출력
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};

router.get('/', (req, res) => {
    res.send('지역구');
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const rows = await getUser(id);
    console.log(rows);
    res.send(`${JSON.stringify(rows)}`);
});

export default router;