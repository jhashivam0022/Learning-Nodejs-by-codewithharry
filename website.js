const fs = require("fs");
const https = require("http");

const port = process.env.PORT || 3000;

const server = https.createServer((req, res) => {
  res.setHeader("Content-Type", "text.html");
  console.log(req.url);

  if (req.url == "/web") {
    res.statusCode = 200;
    res.end("<h1> this is shivam website</h1><p>website</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1> Abour code </h1><p>this is about shivam kumar jha</p>");
  } else if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 400;
    res.end("<h1>Not found</h1><p>This page is not found</p>");
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
