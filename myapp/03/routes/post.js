import express from 'express';
const router = express.Router();
// GET /user/
router.get('/', (req, res) => {
    res.send('게시물 목록을 보여줍니다.');
});
// GET /user/profile
router.get('/:num', (req, res) => {
    const num = req.params.num;
    res.send(`${num}번 게시물 내용을 보여줍니다.`);
});

export default router;