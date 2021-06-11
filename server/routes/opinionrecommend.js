const express = require('express');
const router = express.Router();
const { opinionRecommend } = require("../models/OpinionRecommend");


//=================================
//         opinionrecommend
//=================================

router.post("/saveOpinionRecommend", (req, res) => {
    
    const opinionrecommend = new opinionRecommend(req.body);

    opinionrecommend.save((err, pros) => {
        if(err) return res.json({success: false, err})
        
        opinionRecommend.find({'_id' : pros._id})
        .populate('User')
        .exec((err, result) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true, result})
        })
    })
})


router.post("/recommend", (req, res) => {

    let variable = {}

    if(req.body.videoId) {
        variable = { videoId: req.body.videoId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId, userId: req.body.userId }
    }


    // Like collection에다가 클릭 정보를 넣어줌
    const recommend = new opinionRecommend(variable)

    recommend.save((err, recommend) => {
        if(err) return res.json({ success: false, err })
        res.status(200).json({ success: true })

    })
});




module.exports = router;
