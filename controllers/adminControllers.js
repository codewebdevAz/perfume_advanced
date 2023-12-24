const Product = require("../models/productModels");

exports.get_admin_createProduct = async function (req,res){
    try {
        
        res.render('admin/createProducts',{
            title: 'Məhsul əlave et'
        })

    } catch (err) {
        console.log(err);
    }
};
exports.post_admin_createProduct = async function (req,res){
    try {
    const name = req.body.product_name;
    const description = req.body.product_description;
    const gender = req.body.product_gender;
    const imgUrl = req.body.product_imgUrl;
    const bPrice = req.body.product_bPrice;
    const aPrice = req.body.product_aPrice;

    await Product.create({
        name:name,
        description:description,
        gender:gender,
        imgUrl:imgUrl,
        bPrice:bPrice,
        aPrice:aPrice
    });
        
    res.redirect('/admin/create-product');

    } catch (err) {
        console.log(err);
    }
};

exports.get_admin_productsList = async function (req,res){
    try {

        const products = await Product.findAll({
            raw: true
        });
        
        res.render('admin/productsList',{
            title: 'Məhsulların siyahısı',
            products,
        })

    } catch (err) {
        console.log(err);
    }
};

exports.get_admin_editProduct = async function (req,res){
    try {
        
        res.render('admin/editProducts',{
            title: 'Məhsulların redaktəsi'
        })

    } catch (err) {
        console.log(err);
    }
};

