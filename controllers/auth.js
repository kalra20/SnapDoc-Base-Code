const bcrypt = require('bcryptjs')

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
            
            return bcrypt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
    
                    email: email,
                    password: hashedPassword
                });
    
                return user.save();
            })
            .then(result => {
                res.json({message:"User Created Successfully"})
            });
            
        })
        .catch(err => {
            console.log(err);
        })
    
};


exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}).then(
        user => {
            if(!user){
                return res.json({error: "User not found!"});
            }
            bcrypt.compare(password, user.password)
            .then(doMatch => {
                //boolean result if the passwords are equal or not
                if(doMatch){
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                    return req.session.save(err =>{
                        console.log(err)
                        res.json({message: "Successful log in!"})
                    })
                   
                }
                res.json({message:"Invalid password"})
                
            }).catch(err => {
                console.log(err)
                res.json({error: "Something went wrong not that the passwords do not match, the compare method works this way"})
            })
        }
    )
}