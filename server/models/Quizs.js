module.exports = (sequelize, DataTypes) => {

    const Quizs = sequelize.define("Quizs", {
        
        quizName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quizImage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quizCategory: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quizDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Quizs.associate = (models) => {
        Quizs.hasMany(models.Questions,{
            onDelete: 'cascade',
        })
    }
    return Quizs
}