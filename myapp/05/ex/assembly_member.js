import mysql from 'mysql2/promise';
import express from 'express';
import path from 'path';

const app = express();
const __dirname = import.meta.dirname;

const pool = mysql.createPool({  // ① 데이터베이스 연결
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
});

const getUser = async () => {
    try {
        const [rows] = await pool.query(
            'SELECT sch_unit_cd, hg_nm, sex_gbn_nm,poly_nm,orig_nm  FROM assembly_member ORDER BY row_num LIMIT 0,50');  // ② SQL 실행
        // ③ 실행결과 출력
        console.log(rows);
        return rows;

    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'));

app.get('/', async (req, res) => {
    const list = await getUser();
    res.render('member', { members: list })
});

app.listen(3000);
