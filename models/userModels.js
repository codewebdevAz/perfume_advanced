const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");


const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        alllowNull: false
    },
    email: {
        type: DataTypes.STRING,
        alllowNull: false
    },
    password: {
        type: DataTypes.STRING,
        alllowNull: false
    }
});

module.exports = User;