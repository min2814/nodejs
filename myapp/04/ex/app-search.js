import express from 'express';

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get('/search', (req, res) => {
    const q = req.query.q;
    console.log(q);
    res.status(200).send(`<h2>${q} 검색 완료</h2>`);
});

app.post('/signup', (req, res) => {
    const { username, age } = req.body;
    res.status(200).send(`<h2>${username} 님(${age}세), 회원가입 완료!</h2>`);
});

app.post('/profile', (req, res) => {
    const { username, age } = req.body;
    res.json(JSON.parse(`{"message": "${username}(${age}세) 프로필 등록 완료" }`));
});

app.listen(3000);









