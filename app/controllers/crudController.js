const crud = require('../managers/crudManager');

module.exports = {

    create: async (ctx, next) => {

        try {

        let data = ctx.request.body;      
        let result = await crud.create(data);

        ctx.body = result;
         
        } catch (error) {
            console.error(`ERROR: crudController/create:5: ${error.toString()}`);
            ctx.body = {
                errorMessage: error.toString(),
            };
        }

        return next();
    },

    read: async (ctx, next) => {

        try {

         let result = await crud.read();
         ctx.body = result;
         
        } catch (error) {
            console.error(`ERROR: crudController/read:24: ${error.toString()}`);
            ctx.body = {
                errorMessage: error.toString(),
            };
        }

        return next();
    },

    update: async (ctx, next) => {

        try {

        let data = ctx.request.body;      
        let result = await crud.update(data);

        ctx.body = result;
         
        } catch (error) {
            console.error(`ERROR: crudController/update:41: ${error.toString()}`);
            ctx.body = {
                errorMessage: error.toString(),
            };
        }

        return next();
    },

    delete: async (ctx, next) => {

        try {

         let data = ctx.request.body; 
         let result = await crud.delete(data);     
         
         ctx.body = result;
         
        } catch (error) {
            console.error(`ERROR: crudController/delete:60: ${error.toString()}`);
            ctx.body = {
                errorMessage: error.toString(),
            };
        }

        return next();
    },

};
