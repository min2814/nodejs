import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
});
const deleteUser = async () => {
    const sql = 'DELETE FROM users WHERE id = ?';
    try {
        const [result] = await pool.query(sql, [1]);
        console.log('삭제 완료:', result);
    } catch (e) {
        console.error('삭제 실패:', e.message);
    } finally {
        await pool.end();
        console.log('풀 종료');
    }
};
deleteUser();