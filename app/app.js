require('dotenv').config();

const { protocol, host, port } = require('config').server;
const middlewares              = require('./middlewares');
const routes                   = require('./routes/index');
const mongoose                 = require('./configs/mongoose');

const Koa = require('koa');
const app = new Koa();

middlewares.forEach(middleW => app.use(middleW));
routes.forEach(route => app.use(route));

mongoose();

const skeletonApp = app.listen(port, () => {
    console.log(`${protocol}://${host}:${port}`);
});

module.exports = { skeletonApp };
