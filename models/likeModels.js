const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Like = sequelize.define("like",{
    likeCount: {
        type: DataTypes.INTEGER
    }
});


module.exports = Like;