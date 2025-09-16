import express from 'express';
import greetRouter from './routes/greet.js';

const app = express();

app.use('/greet', greetRouter);

app.use((req, res) => {
    res.status(404).send('페이지 없음');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});