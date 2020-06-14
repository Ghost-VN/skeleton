const bodyParser     = require('./body-parser');
const errors         = require('./errors');
const inputValidator = require('./inputValidator');
const passportInit   = require('./passport-init');

module.exports = [
    bodyParser,
    errors,
    inputValidator,   
    passportInit
];