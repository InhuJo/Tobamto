const express = require('express');
const router = express.Router();
const { Pros } = require("../models/Pros");
const { Cons } = require("../models/Cons");

const { auth } = require("../middleware/auth");

//=================================
//             opinion
//=================================

router.post("/SaveComment", (req, res) => {
    const comment = new Comment(req.body)

    comment.save((err, comment) => {
        if(err) return res.json({success: false, err})
        
        Comment.find({'_id' : comment._id})
        .populate('writer')
        .exec((err, result) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true, result})
        })
    })
})



module.exports = router;
