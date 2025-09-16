import express from "express";
import path from "path";

const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

// 입력 폼 페이지
app.get("/form", (req, res) => {
    res.render("form");
});
// GET 방식 결과 처리
app.get("/form/result", (req, res) => {
    const { username } = req.query;
    res.render("result", { method: "GET", username });
});
// POST 방식 결과 처리
app.post("/form/result", (req, res) => {
    const { username } = req.body;
    res.render("result", { method: "POST", username });
});
app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000/form");
});