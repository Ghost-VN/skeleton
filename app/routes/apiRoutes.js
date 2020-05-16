module.exports = function (router) {
    router
        .get(`/get-sys-mysql`, require('../controllers/testController').getSysInfoMysql);
};
