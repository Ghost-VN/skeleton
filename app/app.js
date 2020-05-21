const { protocol, host, port } = require('config').server;
const bodyParser = require('koa-bodyparser');
const inputValidator = require('node-input-validator');
const Koa = require('koa');
const routes = require('./routes/index');

const app = new Koa();

app
    .use(bodyParser())
    .use(routes)
    .use(inputValidator.koa());

const skeletonApp = app.listen(port, () => {
    console.log(`${protocol}://${host}:${port}`);
});

module.exports = { skeletonApp };