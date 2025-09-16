import express from 'express';
import { logger } from './middleware/logger.js';
import loggerIp from './middleware/logger-ip.js';
const app = express();

// app.use((req, res, next) => {
//     console.log("미들웨어 동작");
//     res.status(403).send('접근 불가!');
//     next();
// });

// app.use(logger);

app.use(loggerIp);

app.get('/', (req, res) => {
    res.status(200).type('html').send('<h1>Hello, Express!</h1>');

});

app.get('/user', (req, res) => {
    res.status(200).type('html').send('<h1>Hello, Express!</h1>');

});
app.listen(3000, () => {
    console.log('http://localhost:3000 실행 중');
});