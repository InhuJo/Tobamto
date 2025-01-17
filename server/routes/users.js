const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image,
    });
});


router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});


router.post("/comment", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id, userName: user.name
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

/* mypage에 사용자 정보 표시하기 위함 */
router.post("/info", (req, res) => {
    User.findOne({'_id':req.body.userId})
    .exec((err, userInfo) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true, userInfo });
    })
});

/* 사용자 정보 수정 */
router.post("/edit", (req, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return res.status(400).send(err);

        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if(err) return res.status(400).send(err);
            else {
                const password = { password:hash }
                
                User.findOneAndUpdate({'_id':req.body.userId}, password)
                .exec((err) => {
                    if(err) return res.status(400).send(err);
                    res.status(200).json({ success: true });
                })
            }
        })
    })
})

module.exports = router;
