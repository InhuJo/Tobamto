const express = require('express');
const router = express.Router();
const { Discussion } = require("../models/Discussion");
const moment = require('moment');
const { Pros } = require("../models/Pros");
const { Cons } = require("../models/Cons");

const { auth } = require("../middleware/auth");

//=================================
//             DIscussion
//=================================

router.post("/saveDiscussion", (req, res) => {
    const discussion = new Discussion(req.body)

    discussion.save((err, discussion) => {
        if(err) return res.json({success: false, err})
        console.log(discussion)
        Discussion.find({'_id' : discussion._id})
        .populate('userId')
        .exec((err, result) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true, result})
        })
    })
});

router.get("/getSubjects", (req, res) => {
    Discussion.find({'state' : 0})
        .populate('userId')
        .exec((err, discussions) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussions })
        })
});

router.post("/getSubjectDetail", (req, res) => {
    
    Discussion.findOne({ "_id" : req.body._id})
        .populate('userId')
        .exec((err, discussion) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussion })
        })
});

router.post("/getProsOpinions", (req, res) => {
    
    Pros.find({ "discussionId" : req.body._id})
        .populate('writer')
        .exec((err, pros) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, pros })
        })
});

router.post("/getConsOpinions", (req, res) => {
    
    Cons.find({ "discussionId" : req.body._id})
        .populate('writer')
        .exec((err, cons) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, cons })
        })
});

/* 내가 쓴 주제 보기 */
router.post("/mydiscussion", (req, res) => {
    
    Discussion.find({'userId':req.body.userId})
        .exec((err, discussions) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussions })
        })
});

/* 현재 진행 중인 토론 목록 가져오기 */
router.get("/getOngoingDiscussions", (req, res) => {
    let date1, date2;
    let today = new Date().getDay();
    let discussions = [];

    switch (today) {
        case 0: case 1: case 2: case 3: case 4: case 5:
            date2 = moment().subtract(today + 1, 'days').format('YYYY-MM-DD');
            break;
        case 6:
            date2 = moment().format('YYYY-MM-DD');
    }

    Discussion.find({ "state": 1 })
        .exec((err, Discussions) => {
            if (err) return res.status(400).send(err);
            for (let discussion of Discussions) {
                date1 = moment(discussion.createdAt).format('YYYY-MM-DD');

                if (date1 >= date2) {
                    discussions.push(discussion);
                }
            }
            res.status(200).json({ success: true, discussions })
        })
});

/* 지난 토론 목록 가져오기 */
router.get("/complete", (req, res) => {
    
    let date1, date2;
    let today = new Date().getDay();
    let list = [];

    switch(today) {
        case 0: case 1: case 2: case 3: case 4: case 5:
            date2 = moment().subtract(today + 1, 'days').format('YYYY-MM-DD');
            break;
        case 6:
            date2 = moment().format('YYYY-MM-DD');
    }

    Discussion.find({'state' : 1 })
        .exec((err, Discussions) => {
            if(err) return res.status(400).send(err);

            for(let discussion of Discussions) {
                date1 = moment(discussion.createdAt).format('YYYY-MM-DD');

                if(date1 < date2) {
                    list.push(discussion);
                }
            }
            res.status(200).json({ success: true, list })
        })
});


module.exports = router;
