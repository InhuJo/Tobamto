const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = mongoose.Schema({
    // 주제 신청한 유저의 아이디
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 주제
    subject: {
        type: String
    },
    // 신청 이유
    content: {
        type: String
    },
    // 미승인=0, 승인=1, 승인 시 토론 주제로 선정된 것
    state: {
        type: Number,
        default: 0 
    }
}, { timestamps: true }) 


const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = { Discussion }