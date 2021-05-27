const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 토론 신청 글 및 일반 의견에 전부 이 스키마를 사용
// 만약 opinionId가 null이라면 토론 신청 글에 대한 추천
// discussionId와 opinionId가 둘 다 null이 아니라면 의견에 대한 추천
const discussionRecommendSchema = mongoose.Schema({
    // 추천을 누른 유저의 id
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 토론 id
    discussionId: {
        type: Schema.Types.ObjectId,
        ref: 'Discussion'
    },
}, { timestamps: true }) 

const discussionRecommend = mongoose.model('Recommend', discussionRecommendSchema);

module.exports = { discussionRecommend }