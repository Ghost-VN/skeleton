const { baseRoutes, authRoutes, postRoutes, likesRoutes } = require('../routes/APIs');

module.exports = [
    baseRoutes(), 
    authRoutes(), 
    postRoutes(),
    likesRoutes()
];