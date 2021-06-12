const express = require('express');
const router = express.Router();
const { Discussion } = require("../models/Discussion");
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
            console.log(discussions);
            res.status(200).json({ success: true, discussions })
        })
});

router.post("/getSubjectDetail", (req, res) => {
    console.log(req.body._id)
    
    Discussion.findOne({ "_id" : req.body._id})
        .populate('userId')
        .exec((err, discussion) => {
            console.log(discussion.subject)
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussion })
        })
});

router.get("/getOngoingDiscussions", (req, res) => {
    
    Discussion.find({ "state" : 1 })
        .populate('writer')
        .exec((err, discussions) => {
            console.log(discussions)
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussions })
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


router.post("/mydiscussion", (req, res) => {
    
    Discussion.find({'userId':req.body.userId})
        .exec((err, discussions) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussions })
        })
});



module.exports = router;
