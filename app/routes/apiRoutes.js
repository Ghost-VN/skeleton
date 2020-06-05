module.exports = function (router) {
    router
        .get('/get-sys-mysql/', require('../controllers/testController').getSysInfoMysql)

        .post('/create/', require('../controllers/crudController').create)
        .get('/read/', require('../controllers/crudController').read)
        .put('/update/', require('../controllers/crudController').update)
        .delete('/delete/', require('../controllers/crudController').delete)
};
