const router      = require('koa-router')();
const indexRoutes = require('./indexRoutes');
const apiRoutes   = require('./apiRoutes');

indexRoutes(router);
apiRoutes(router);

module.exports = router.routes();