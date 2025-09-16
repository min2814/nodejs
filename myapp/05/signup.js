import express from "express";
import path from "path";

const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
// GET /signup - 폼 보여주기
app.get("/signup", (req, res) => {
    res.render("signup", { error: null, values: {} });
});
// POST /signup - 여기를 학습자가 직접 구현
app.post("/signup", (req, res) => {
    const { username, password, confirm } = req.body;
    // TODO: 유효성 검사 코드 작성
    if (!username || !password || !confirm) {
        return res.render('signup', {
            error: "모든 항목을 입력하세요.",
            values: req.body
        });
    }
    if (username.length > 20 || password.length > 20 || confirm.length > 20) {
        return res.render('signup', {
            error: "입력값은 20자 이하만 가능합니다.",
            values: req.body
        });
    }
    if (password != confirm) {
        return res.render('signup', {
            error: "비밀번호가 일치하지 않습니다.",
            values: req.body
        });
    }
    // 성공 시
    return res.render("signup-welcome", { username });
});
app.listen(3000, () => {
    console.log(" 서버 실행 중: http://localhost:3000/signup");
});
