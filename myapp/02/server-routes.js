import http from 'node:http';
import { handleRoute } from './routes.js';
const server = http.createServer((req, res) => {
    handleRoute(req, res);
});
server.listen(3000);