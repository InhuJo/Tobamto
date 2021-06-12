const express = require('express');
const router = express.Router();
const { Pros } = require("../models/Pros");
const { Cons } = require("../models/Cons");

const { auth } = require("../middleware/auth");
const { User } = require('../models/User');

//=================================
//             opinion
//=================================

router.post("/savePros", (req, res) => {
    
    const pros = new Pros(req.body);

    pros.save((err, pros) => {
        if(err) return res.json({success: false, err})
        
        Pros.find({'_id' : pros._id})
        .populate('writer')
        .exec((err, result) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true, result})
        })
    })
})


router.post("/saveCons", (req, res) => {
    
    const cons = new Cons(req.body);

    cons.save((err, cons) => {
        if(err) return res.json({success: false, err})
        
        Pros.find({'_id' : cons._id})
        .populate('writer')
        .exec((err, result) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true, result})
        })
    })
})

router.post("/myopinion", (req, res) => {
    Cons.find({'writer': req.body.userId })
    .populate('discussionId')
    .exec((err, cons) => {
        if (err) return res.status(400).send(err);

        Pros.find({'writer':req.body.userId})
        .populate('discussionId')
        .exec((err, pros) => {
            if(err) return res.status(400).send(err);

            return res.status(200).json({success: true, cons, pros});
        })
    })
})

router.post("/count", (req, res) => {
   const list = req.body;

   Cons.find({ 'discussionId': list._id })
   .exec((err, cons) => {
       if (err) return res.status(400).send(err);

       Pros.find({ 'discussionId': list._id })
       .exec((err, pros) => {
           if(err) return res.status(400).send(err);
           
           const count = cons.length + pros.length;

           return res.status(200).json({ success: true, count });
       })
   })
})

module.exports = router;
