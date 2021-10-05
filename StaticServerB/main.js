const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static'), {
    setHeaders(res) {
        res.header("Cache-Control", "no-cache")
    }
}));

app.listen('3001', () => {
    console.warn('服务启动')
})
