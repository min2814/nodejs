import express from 'express';
import path from 'path';

const app = express();

app.get('/image', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'public', 'node.png'));
    console.log(import.meta.dirname);
});

app.get('/download', (req, res) => {
    res.download(path.join(path.resolve(), 'public', 'node.png'));
});

app.listen(3000);