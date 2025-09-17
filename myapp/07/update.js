import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
});
const updateUser = async () => {
    const sql = 'UPDATE users SET name = ? WHERE id = ?';
    try {
        const [result] = await pool.query(sql, ['수정된이름', 1]);
        console.log('수정 완료:', result);
    } catch (e) {
        console.error('수정 실패:', e.message);
    } finally {
        await pool.end();
        console.log('풀 종료');
    }
};
updateUser();