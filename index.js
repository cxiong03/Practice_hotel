const express = require('express');
const server = express();
const port = 3000;

server.use(express.static('public'));

server.get('/', (req, res) => {
    res.send("Welcome to the ROOT route of your website");
});

server.get('/roomservice', (req, res, next) => {
    res.send("Welcome to the ROOM SERVICE route of your website");
    next();
}, 
(req, res) => {
    console.log(`A user just accessed ${req.hostname}:${port}${req.originalUrl}`);

});


server.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});