const Product  = require("../models/productModels");

exports.get_blog = async function (req,res){

    res.render('users/index',{
        title:'Perfume Store',
        
    });
};

exports.get_basket = async function (req,res){
    res.render('users/basket',{
        title: 'Səbət',
        products,
    });
};

exports.get_product = async function (req,res){
    const productid = req.params.id;

    res.render('users/about',{
        title: "Məhsul haqqında",
        productid,
        products,
    });
};