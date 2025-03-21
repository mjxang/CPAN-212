const http = require("http");
const server = http.createServer((req,res) => {
    if (req.url === "/") {
        res.writeHead("Hello World");
        res.end();
    }
else if (req.url === "about") {
    res.write("about us");
    res.end();
}
else if (req.url === "/login") {
    res.write("login");
    res.end();  
}
else if (req.url === "/register") {
    res.write("register");
    res.end();  
}
else if (req.url === "/logout") {
    res.writeHead("logout");
    res.end();
}
else {
    res.writeHead("page not found");
    res.end();
}
});

server.listen(3000);

console.log("Listing to on port 3000");