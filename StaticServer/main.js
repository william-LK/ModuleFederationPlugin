const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));

app.listen('3000', () => {
    console.warn('服务启动')
})
