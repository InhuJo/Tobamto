const express = require('express');
const router = express.Router();
const { OpinionRecommend } = require("../models/OpinionRecommend");
const { DiscussionRecommend } = require("../models/DiscussionRecommend");
const { Discussion} = require("../models/Discussion")


//=================================
//         recommend
//=================================

router.post("/getOpinionRecommend", (req, res) => {

    let variable = {}

    if(req.body.ProsId) {
        variable = { ProsId: req.body.ProsId }
    } else {
        variable = { ConsId: req.body.ConsId }
    }

    OpinionRecommend.find(variable)
        .exec((err, recommend) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, recommend})
        })

});


router.post("/saveOpinionRecommend", (req, res) => {

    let variable = {}

    if(req.body.ProsId) {
        variable = { userId: req.body.userId, ProsId: req.body.ProsId }
    } else {
        variable = { userId: req.body.userId, ConsId: req.body.ConsId }
    }

    // Like collection에다가 클릭 정보를 넣어줌
    const recommend = new OpinionRecommend(variable)

    recommend.save((err, recommend) => {
        if(err) return res.json({ success: false, err })
        res.status(200).json({ success: true, recommend })

    })
});

router.post("/unOpinionRecommend", (req, res) => {

    let variable = {}

    if(req.body.ProsId) {
        variable = { userId: req.body.userId, ProsId: req.body.ProsId }
    } else {
        variable = { userId: req.body.userId, ConsId: req.body.ConsId }
    }

    OpinionRecommend.findOneAndDelete(variable)
        .exec((err, result)=> {
            if(err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true })
        })

});


router.post("/getDiscussionRecommend", (req, res) => {

    DiscussionRecommend.find({ discussionId: req.body.discussionId})
        .exec((err, recommend) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, recommend})
        })

});


router.post("/saveDiscussionRecommend", (req, res) => {

    const recommend = new DiscussionRecommend(req.body)

    recommend.save((err, recommend) => {
        if(err) return res.json({ success: false, err })
        // 추천 현황 살펴보고
        DiscussionRecommend.find({ discussionId: req.body.discussionId })
            .exec((err, recommended) => {
                if(err) return res.json({ success: false, err })
                // 만약 그 의견의 추천이 10개를 넘으면
                if(recommended.length >= 10) {
                    // 그 의견의 상태 업데이트
                    Discussion.findOneAndUpdate({ _id: req.body.discussionId }, { state: 1 })
                        .exec((err, result) => {
                           if(err) return res.json({ success: false, err })
                        })
                }
            })
        
        res.status(200).json({ success: true, recommend})
    })
});
            


router.post("/unDiscussionRecommend", (req, res) => {

    DiscussionRecommend.findOneAndDelete(req.body)
        .exec((err, result)=> {
            if(err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true })
        })

});



module.exports = router;
