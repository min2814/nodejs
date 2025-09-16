import express from 'express';
const app = express();
app.use(express.json());
app.post('/json', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `name: ${name} / age: ${age}` });
});
app.listen(3000);