module.exports = (sequelize, DataTypes) => {


    const Quizzes = sequelize.define("Quizzes", {
        
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

    return Quizzes
}