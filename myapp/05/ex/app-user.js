import express from 'express';
import path from 'path';

const app = express();
const __dirname = import.meta.dirname;


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'));

app.get('/welcome/:user', (req, res) => {
    const q = req.query.name;
    const user = req.params.user;
    res.render('welcome', {
        name: q,
        user: user,
        items: ["apple", "banana", "cherry"]

    });
});


app.listen(3000);