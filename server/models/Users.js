module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bronzeCrown: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        silverCrown: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goldCrown: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        platinumCrown: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    })

    return Users;
}