import express from 'express';

const router = express.Router();


router.get('/:name', (req, res) => {
    const name = req.params.name;
    if (name && name.trim() != '') {
        res.status(200).type('html').send(`<h2>안녕하세요, ${name}님! </h2>`);
    }
    else {
        res.status(404).type('html').send('404 에러');
    }
});



export default router;