import express from 'express';
import path from 'path';

const __dirname = import.meta.dirname;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('layout1', { title: '홈페이지1', page: 'index2' });
});

app.get('/about', (req, res) => {
    res.render('layout1', { title: '홈페이지2', page: 'about' });
});

app.get('/contact', (req, res) => {
    res.render('layout1', { title: '홈페이지3', page: 'contact' });
});

app.listen(3000, () => {
    console.log(' 서버 실행 중: http://localhost:3000');
});