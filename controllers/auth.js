const User = require('../models/user')

exports.getSignUp = (req, res, next) => {

    res.render('auth/signup', {

        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false
    })
};


exports.postSignUp = (req, res, next) => {
    console.log("Welcome to signup")
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    User.findOne({email: email})
        .then(userDoc => {
            if(userDoc){
                res.json({error: "User already there. Please use other signup details"})
            }

            const user = new User({

                email: email,
                password: password
            });

            return user.save();
        })
        .then(result => {
            res.json({message:"User Created Successfully"})
        })
        .catch(err => {
            console.log(err);
        })
    
};