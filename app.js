const express = require('express');
const http = require('http');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist/ani')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ani/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log("running"));

// const express = require('express');
// const http = require('http');
// const app = express();
//
// app.use(express.static(__dirname + '/dist'));
// app.listen(process.env.PORT || 3000);
