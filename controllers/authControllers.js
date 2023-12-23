const { products } = require("../data/db")
const User = require("../models/userModels")

exports.get_register = async function (req,res){
    res.render('auth/register',{
        title: "Register",
        products,
    });
    //Nail
};
exports.post_register = async function (req,res){
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        await User.create({
            name: username,
            email: email,
            password: password
        });

        res.redirect("/auth/login");
    } catch (err) {
        console.log("Error: ", err);
    }
};

exports.get_login = async function (req,res){
    res.render('auth/login',{
        title: "Login",
        products,
    });
};





