const config = require('config');
const bodyParser = require('koa-bodyparser');
const inputValidator = require('node-input-validator');
const Koa = require('koa');
const routes = require('./routes/index');

const app = new Koa();

app
    .use(bodyParser())
    .use(routes)
    .use(inputValidator.koa());

const { server } = config;

const skeletonApp = app.listen(config.server.port, () => {
    console.log(`${server.protocol}://${server.host}:${server.port}`);
});

module.exports = { skeletonApp };
