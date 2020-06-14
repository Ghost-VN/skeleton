const Post = require('../models/Post');

module.exports = {

    save: async (ctx, next) => {
        const { body } = ctx.request.body;
        const { user } = ctx.state;
        ctx.body = await new Post({
            body,
            user: user._id
        }).save();
        ctx.status = 201;

        return next();
    },

    getByUserId: async (ctx, next) => {
        const { query } = ctx;
        const { skip, limit } = query;
        delete query.skip;
        delete query.limit;

        const q = 'users' in query ? {
            user: {
                $in: query.users.split(',')
            }
        } : query;

        ctx.set('x-total-count', await Post.countDocuments(q));
        ctx.body = await Post
           .find(q)
           .sort({ createDate: -1 })
           .skip(+skip)
           .limit(+limit);

        return next();
    },

    getByPostId: async (ctx, next) => {
        const { id } = ctx.params;
        const post = await Post.findById(id);
        if(post){
            ctx.body = post;
        }else{
            ctx.throw(404, `Post ${id} has not been found`);
        }
          return next();
    },

    update: async(ctx, next) => {
        const { _id, body } = ctx.request.body;
        const user = ctx.state.user._id;
        ctx.body = await Post.findOneAndUpdate(
            { _id, user },
            { $set: { body } },
            { new: true }
        );
        return  next();
    },

    delete: async (ctx, next) => {
        const  { _id } = ctx.params;
        const user = ctx.state.user._id;
        await Post.findOneAndRemove({ _id, user });
        ctx.body = {
            message: `Post ${_id} has been deleted`
        };

        return next();
    }

}