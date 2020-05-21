const testManager = require('../managers/testManager');
const cache = require('../helpers/cacheHelper');

module.exports = {

    getSysInfoMysql: async (ctx, next) => {

        let result;
        const rootKey = `-${ctx.url.slice(1)}`;

        try {
            const key = `sysData${rootKey}`;
            const sysDataFromCache = await cache.get(key);

            switch (true) {
            case Boolean(sysDataFromCache): result = sysDataFromCache;
                break;
            default:
                result = await testManager.getSys();

                if (result) {
                    cache.set(key, result, 60)
                        .catch(e => console.log(e));
                }
                break;
            }
            ctx.body = {
                status: result,
            };
        } catch (error) {
            console.error(`ERROR: testController/getSysInfoMysql:6: ${error.toString()}`);
            ctx.body = {
                errorMessage: error.toString(),
            };
        }

        return next();
    },

};
