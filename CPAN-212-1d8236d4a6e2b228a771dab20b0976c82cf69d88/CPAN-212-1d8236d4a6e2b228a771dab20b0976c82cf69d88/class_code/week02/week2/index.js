import http from "http";
import fs from "fs"

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage);
    } else if (req.url === "/about") {
        res.end("Welcome to the About page");
    } else if (req.url === "/user/account/id") {
        res.end("My name is MJ");
    } else {
        res.end("oops! page not found");
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});