const bodyParser     = require('./body-parser');
const errors         = require('./errors');
const mongooseErrors = require('./mongooseError');
const passportInit   = require('./passport-init');
const inputValidator = require('./inputValidator');

module.exports = [
    bodyParser,
    errors,    
    mongooseErrors,
    passportInit,
    inputValidator
];