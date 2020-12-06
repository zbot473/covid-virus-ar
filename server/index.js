const express = require("express")
const app = express()
const https = require('https');
var fs = require('fs');
const fetch = require('node-fetch');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
app.use("/assets", express.static("assets/"))

app.use(express.static("client/"));

https.createServer(options, app).listen(8443);
