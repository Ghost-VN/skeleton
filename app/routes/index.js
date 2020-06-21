const { baseRoutes, 
        authRoutes, 
        userRoutes,
        postRoutes, 
        likesRoutes, 
        commentRoutes, 
        subsRoutes } = require('../routes/APIs');

module.exports = [
    baseRoutes(), 
    authRoutes(), 
    userRoutes(),
    postRoutes(),
    likesRoutes(),
    commentRoutes(),
    subsRoutes()
];