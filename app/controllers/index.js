const { app } = require('config');

module.exports = {
    startPage: async (ctx, next) => {
        try {
            ctx.body = {
                name: app.name,
                version: app.version,
                description: app.description
            };
        } catch (error) {
            ctx.status = 500;
            ctx.body = {
                status: `ERROR: ${error.toString()}`
            };
        }
        return next();
    }
}


