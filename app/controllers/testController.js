const testManager = require('../managers/testManager');

module.exports = {

    getSysInfoMysql: async (ctx, next) => {

        let result;

        try {
            result = await testManager.getSys();            
            ctx.body = {
                status: 'OK',
            };
        } catch (error) {
            console.error(`ERROR: ${error.toString()}`);
            ctx.body = {
                errorMessage: error.toString(),
            };
        }

        return next();
    },

};
