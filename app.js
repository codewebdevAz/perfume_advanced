const express = require('express');
const path = require('path');
const ejs = require('ejs');
const sequelize = require("./data/db");
const pageRouters = require('./routes/pageRouters');
const authControllers = require('./routes/authRoutes');
const port = 3000;
const User = require("./models/userModels");
const Product = require("./models/productModels");
const Dislike = require("./models/dislikeModels");
const Like = require("./models/likeModels");
const Comment = require("./models/commentModels");

const app = express();
app.use(express.urlencoded({extended: true}));

app.set("view engine", 'ejs');


app.use('/libr',express.static(path.join(__dirname, 'node_modules')));
app.use('/static',express.static(path.join(__dirname, 'public')));

app.use(pageRouters);
app.use('/auth', authControllers);

// Əlaqələr

//! User
Comment.hasMany(User);
User.belongsTo(Comment);

Like.hasMany(User);
User.belongsTo(Like);

Dislike.hasMany(User);
User.belongsTo(Dislike);

//! Product
Comment.hasMany(Product);
Product.belongsTo(Comment);

Like.hasMany(Product);
Product.belongsTo(Like);

Dislike.hasMany(Product);
Product.belongsTo(Dislike);

//! Comment
Like.hasMany(Comment);
Comment.belongsTo(Like);

Dislike.hasMany(Comment);
Comment.belongsTo(Dislike);

// Sync
// (async ()=>{
//     await sequelize.sync({ force: true });
// })()

app.listen(port, ()=>{
    console.log(`Server ${port} üzərində işləyir.`);
});