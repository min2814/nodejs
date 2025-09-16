import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {

    // res.setHeader('Content-Type', 'video/mp4; charset=utf8');
    // const obj = {
    //     "id": "abcd",
    //     "pw": 1234
    // };
    // res.end(JSON.stringify(obj));
    // console.log(req.method);
    // console.log(req.url);
    const url객체 = url.parse(req.url, true);
    const query = url객체.query;
    console.log(req.url);
    const path = url객체.pathname;
    const id = url객체.query.id;
    const pw = url객체.query.pw;


    res.setHeader('content-type', 'text/plain; charset=utf8');
    res.end(JSON.stringify(query));
});

server.listen(3000);