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

    get: async (ctx, next) => {
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
    }

}