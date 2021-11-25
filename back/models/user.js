const DataTypes = require('sequelize');

module.exports = class User extends DataTypes.Model {
  static init(sequelize) {
    return super.init({
      // id <- default
      provider: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        // STRING, INTEGER, FLOAT, TEXT, DATETIME, BOOLEAN, 
        type: DataTypes.STRING(40),
        allowNull: false, // required
      },
      googleId: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: true, // 고유값
      },
      avatar: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      role: { 
        type: DataTypes.STRING(40),
        defaultValue: 'USER'
      },
      facebookId: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: true,
      },
      locale: {
        type: DataTypes.STRING(10),
        allowNull: true,
      }
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글설정
      sequelize,
    })
  }

  static associate(db) {
  }
}