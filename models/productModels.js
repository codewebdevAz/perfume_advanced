const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Product = sequelize.define("product" , {
    name: {
        type: DataTypes.STRING,
        alllowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        alllowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        alllowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        alllowNull: false
    },
    bPrice: {
        type: DataTypes.INTEGER,
        alllowNull: false
    },
    aPrice: {
        type: DataTypes.STRING,
        alllowNull: false,
    },
    addBasket:{
        type: DataTypes.BOOLEAN,
        alllowNull:false,
        defaultValue: false,
    },
    addLike:{
        type: DataTypes.BOOLEAN,
        alllowNull:false,
        defaultValue: false,
    }
});

module.exports = Product;