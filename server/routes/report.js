const express = require('express');
const router = express.Router();
const { Report } = require("../models/Report");

//=================================
//         report
//=================================

router.post("/onReport", (req, res) => {
    console.log(req.body);
    const report = new Report(req.body)

    report.save((err, report) => {
        if(err) return res.json({ success: false, err })
        res.status(200).json({ success: true, report })

    })

});
module.exports = router;
