const express = require('express');
const router = express.Router();
const UserModel = require('../../models/User');


//! Create API

//? Create User
router.post('/', async (req, res) =>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    const user = new UserModel({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    })
    try {
        await user.save();
        res.send("Register Successfully");
    }
    catch(err) {
        console.log(err);
    }
});

//? Read users
router.get('/', (req, res) => {
    UserModel.find()
    .then(user => res.json(user))
    .catch(err => res.status(404).json({nouserfound: 'No user Found'}));
})

module.exports = router;