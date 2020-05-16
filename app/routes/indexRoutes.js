const { startPage } = require('../controllers/indexController');

module.exports = function (router) {
    router
        .get('/', startPage)     
};
