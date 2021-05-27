const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consShema = mongoose.Schema({
    // 의견 제시한 유저의 아이디
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 토론 id
    discussionId: {
        type: Schema.Types.ObjectId,
        ref: 'Discussion'
    },
    content: {
        type: String
    }
}, { timestamps: true }) 


const Cons = mongoose.model('Cons', consShema);

module.exports = { Cons }