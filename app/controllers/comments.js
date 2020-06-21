const Post = require('../models/Post');

module.exports = {

    create: async (ctx, next) => {
       const post = await Post.findById(ctx.params.postId);
       if(!post){
           ctx.throw(404, `Post has not been found`)
       };

       const { body } = ctx.request.body;
       post.comments.unshift({ body, user: ctx.state.user._id });
       ctx.body = await post.save();

       return next();
    },

    delete: async (ctx, next) => {
       const post = await Post.findById(ctx.params.postId);
       if(!post){
           ctx.throw(404, 'Post has not been found')
       };

       const commentIndex = post.comments.findIndex(c => c._id.toString() == ctx.params.commentId);
       if(commentIndex < 0){
           ctx.throw(404, 'Comment has not been found')
       };
       post.comments.splice(commentIndex, 1);
       ctx.body = await post.save();

       return next();
    }

}