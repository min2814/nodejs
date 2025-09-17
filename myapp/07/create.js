import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
});
const createMember = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS users (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(50), age INT)`;
    try {
        await pool.query(sql);
        console.log("테이블 생성 완료");
    } catch (e) {
        console.error("테이블 생성 실패: ", e.message);
    } finally {
        await pool.end();
        console.log("풀 종료");
    }
};
createMember();