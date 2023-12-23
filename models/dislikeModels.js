const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Dislike = sequelize.define("dislike",{
    dislikeCount: {
        type: DataTypes.INTEGER
    }
});

module.exports = Dislike;