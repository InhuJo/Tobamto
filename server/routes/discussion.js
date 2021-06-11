const express = require('express');
const router = express.Router();
const { Discussion } = require("../models/Discussion");

const { auth } = require("../middleware/auth");

//=================================
//             DIscussion
//=================================

router.post("/saveDiscussion", auth, (req, res) => {
    const discussion = new Discussion(req.body)
    console.log("111")

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

module.exports = router;
