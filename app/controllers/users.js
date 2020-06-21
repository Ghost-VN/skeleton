const User = require('../models/User');


module.exports = {

    getUserById: async (ctx, next) => {      
       const { _id } = ctx.params;
       const user = await User.findById(_id);

       if(user){
          ctx.body = user;
       }else{
           ctx.throw(404, 'User has not been found')
       };

       return next();
    }    

}