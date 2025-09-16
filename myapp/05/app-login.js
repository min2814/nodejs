import express from "express";
import path from "path";
const __dirname = import.meta.dirname;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.get("/login", (req, res) => {
    res.render("login", { error: null, values: {} });
});
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.render("login", {
            error: "아이디와 비밀번호를 모두 입력하세요.",
            values: req.body
        });
    }
    if (username.length > 20 || password.length > 20) {
        return res.render("login", {
            error: "입력값은 20자 이하만 가능합니다.",
            values: req.body
        });
    }
    if (username === "user" && password === "1234") {
        return res.render("welcome2", { username });
    }
    return res.render("login", {
        error: "아이디 또는 비밀번호가 일치하지 않습니다.",
        values: req.body
    });
});
app.listen(3000, () => {
    console.log(" 서버 실행 중: http://localhost:3000/login");
});