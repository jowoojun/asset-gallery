const DataTypes = require('sequelize');

module.exports = class Celebrity extends DataTypes.Model {
  static init(sequelize) {
    return super.init({
      // id <- default
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      ticker: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      averagePrice: {
        type: DataTypes.STRING(10),
        allowNull: true,
      }
      // AnalystId: 1
    }, {
      modelName: 'Celebrity',
      tableName: 'celebritys',
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글설정
      sequelize,
    })
  }

  static associate(db) {
    db.Celebrity.belongsTo(db.Analyst)
  }
}