const Subs = require('../models/Subs');

module.exports = {

    create: async (ctx, next) => {
       const { profile } = ctx.request.body;
       const subscriber  = ctx.state.user._id;
       const checkSub   = await Subs.findOne({ subscriber, profile });

       if(checkSub){
           ctx.throw(404, 'You have already subscribed')
       };

       ctx.body = await new Subs({ subscriber, profile }).save();
       ctx.status = 201;

       return next();
    },

    get: async (ctx, next) => {
       ctx.body = await Subs.find(ctx.query);

       return next();
    },

    delete: async (ctx, next) => {
       const { _id } = ctx.params;
       const subscriber = ctx.state.user._id;

       await Subs.findOneAndDelete({ _id, subscriber });
       ctx.body = {
           message: 'You was unsubscribed'
       };

       return next();
    }

}