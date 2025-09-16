import http from 'http';
import { add, sub } from './calculator.js';
const server = http.createServer((req, res) => {
    add(3, 4);
    sub(4, 3);
});
server.listen(3000);