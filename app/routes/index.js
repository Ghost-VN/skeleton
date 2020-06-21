const { baseRoutes, authRoutes, postRoutes, likesRoutes, commentRoutes, userRoutes } = require('../routes/APIs');

module.exports = [
    baseRoutes(), 
    userRoutes(),
    authRoutes(), 
    postRoutes(),
    likesRoutes(),
    commentRoutes()
];