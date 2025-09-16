import express from "express";
import path from "path";

const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

// 입력 폼 페이지
app.get("/coffee", (req, res) => {
    res.render("coffee-form");
});
// GET 방식 결과 처리
app.get("/coffee/result", (req, res) => {
    const { username, drink, options } = req.query;
    res.render("coffee-result", {
        username,
        drink,
        options: Array.isArray(options) ?
            options : [options].filter((v) => {
                return Boolean(v);
            })
    });
});

app.post('/coffee/result', (req, res) => {
    const { username, drink, options } = req.body;
    res.render("coffee-result", {
        username,
        drink,
        options: Array.isArray(options) ?
            options : [options].filter((v) => {
                return Boolean(v);
            })
    });
})

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000/coffee");
});