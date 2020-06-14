const Router = require('koa-router');
const passport = require('koa-passport');

const authRoutes = new Router(),
      baseRoutes = new Router(),
      postRoutes = new Router;

baseRoutes
      .prefix('/api')
      .get(`/service`, require('../controllers/index').startPage)              // info about service
      .get(`/get-sys-mysql`, require('../controllers/test').getSysInfoMysql);  // get sys info from mysql (for test)

authRoutes
      .prefix('/api/auth')
      .post('/register', require('../controllers/auth').register) // user registration
      .post('/login', require('../controllers/auth').login);      // user login

postRoutes
      .prefix('/api/posts')
      .post('/', passport.authenticate('jwt', { session: false }), require('../controllers/posts').save) // save post
      .get('/', require('../controllers/posts').get)  // get posts by user/users id/Ids
      .get('/:id')
      .put('/', passport.authenticate('jwt', { session: false }))
      .delete('/:_id', passport.authenticate('jwt', { session: false }));


module.exports = {
      baseRoutes() {
            return baseRoutes.routes();
      },
      authRoutes() {
            return authRoutes.routes();
      },
      postRoutes() {
            return postRoutes.routes();
      }
};
