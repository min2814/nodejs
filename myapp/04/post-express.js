import express from 'express';
const app = express();
app.use(express.urlencoded());
app.post('/login', (req, res) => {
    const { username } = req.body;
    res.send(`<h2>${username} 님, 로그인 완료!</h2>`);
});
app.listen(3000);