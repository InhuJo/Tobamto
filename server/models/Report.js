const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = mongoose.Schema({
    // 신고 당하는 사람
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 신고한 사람
    reporter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // 의견 id
    ProsId: {
        type: Schema.Types.ObjectId,
        ref: 'Pros'
    },
    ConsId: {
        type: Schema.Types.ObjectId,
        ref: 'Cons'
    },
    // 신고 이유
    content: {
        type: String
    }
}, { timestamps: true }) 


const Report = mongoose.model('Report', reportSchema);

module.exports = { Report }