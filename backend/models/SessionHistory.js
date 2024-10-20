const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const SessionHistory = sequelize.define('SessionHistory', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    moodBefore: { type: DataTypes.STRING },
    moodAfter: { type: DataTypes.STRING },
    duration: { type: DataTypes.INTEGER },  // Duration of meditation session
});

module.exports = SessionHistory;
