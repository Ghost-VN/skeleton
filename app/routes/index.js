const { baseRoutes, authRoutes, postRoutes } = require('../routes/APIs');

module.exports = [
    baseRoutes(), 
    authRoutes(), 
    postRoutes()
];