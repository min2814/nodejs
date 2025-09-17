import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
});
const insertUser = async () => {
    const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
    try {
        const [result] = await pool.query(sql, ['nodejs', 20]);
        console.log('사용자 삽입 완료:', result);
    } catch (e) {
        console.error('삽입 실패:', e.message);
    } finally {
        await pool.end();
        console.log('풀 종료');
    }
};
insertUser();