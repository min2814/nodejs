import fs from 'node:fs';
import path from "node:path";

const date = new Date();
const logsDir = path.join(process.cwd(), "logs");


const logFile = path.join(logsDir, "log.txt");

console.log(fs.existsSync(logsDir));

if (fs.existsSync(logsDir) == false) {
    fs.mkdirSync(logsDir);
}
fs.writeFileSync('logs/log.txt', `[${date.toISOString()}] 서버가 시작되었습니다\n`);
fs.appendFileSync(logFile, `[${date.toISOString()}] 사용자가 로그인했습니다`);
