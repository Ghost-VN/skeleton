const MongooseError = require('mongoose').Error;

module.exports = async (ctx, next) => {
   try{
      await next();
   }catch(error){
       if(error instanceof MongooseError){
           ctx.throw(400, 'Bad request');
       }else{
           ctx.throw(error.toString());
       }
   }
};