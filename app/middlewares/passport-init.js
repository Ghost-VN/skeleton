const passport       = require('koa-passport');
const passportConfig = require('../configs/passport');

passportConfig(passport);

module.exports = passport.initialize();