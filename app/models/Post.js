const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    likes: [
        {
            user: {
               type: Schema.Types.ObjectId,
               ref: 'users',
               required: true 
            },
            createDate: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posts', postSchema)