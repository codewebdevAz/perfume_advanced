const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Comment = sequelize.define("comment",{
    commentContent: {
        type: DataTypes.TEXT
    }
});

module.exports = Comment;