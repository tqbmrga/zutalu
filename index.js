
require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

//middlewares
// app.use('/posts', (req,res) => {
//     res.send('this is middlewares');
// });

// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { 
        // user: 'root', //testroot
        // pass: 123456, //password
        // dbName: 'test', // 'mydb' which is the default selected DB
        // autoIndex: 'NODE_ENV' === 'dev',
        // useNewUrlParser: true,
        // reconnectTries: Number.MAX_VALUE,
        // reconnectInterval: 500, // Reconnect every 500ms
        // poolSize: 10 // Maintain up to 10 socket connections
     }, () => console.log('Connect to DB')
);

//Import Routers
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/',(req,res) => {
    res.send('hello lulu');
});

 
// start listening
app.listen(port);
console.log(`Server running on port ${port}`);

// let server = http.createServer((req, res) => {
//     let html = `<h1>bao bao 1111 1111</h1>`;
//     // Add new code to test the live reload
//     html += `<h2>As of: ${new Date()}</h2><br>`;
//     // Iterate over `process.env` object and
//     // print its values.
//     Object.keys(process.env).forEach((k) => {
//         html += `${k} = ${process.env[k]} <br>`
//     });
//     // Set the response status and response content 
//     // type header
//     res.writeHead(200, {
//         'content-type': 'text/html'
//     });
//     return res.end(html);
// });