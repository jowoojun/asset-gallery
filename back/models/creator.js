const DataTypes = require('sequelize');

module.exports = class Creator extends DataTypes.Model {
  static init(sequelize) {
    return super.init({
      // id <- default
      title: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tag_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      profileId: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      subscriberCount: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      videoCount: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
    }, {
      modelName: 'Creator',
      tableName: 'creators',
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글설정
      sequelize,
    })
  }

  static associate(db) {
  }
}