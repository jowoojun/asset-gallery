const DataTypes = require('sequelize');

module.exports = class Analyst extends DataTypes.Model {
  static init(sequelize) {
    return super.init({
      // id <- default
      title: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      tag_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      profileId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      }
    }, {
      modelName: 'Analyst',
      tableName: 'analysts',
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글설정
      sequelize,
    })
  }

  static associate(db) {
    db.Analyst.hasMany(db.Celebrity);
  }
}