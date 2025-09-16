
export default function handleEcho(req, res, query) {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
    res.end(`${query.text}`);

}