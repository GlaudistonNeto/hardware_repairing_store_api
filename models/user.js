const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../config/database');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hashedPassword);
          },
        },
        rememberMeToken: {
          type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: 'User',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
    });

    this.hasMany(models.Forum, {
      foreignKey: 'userId',
      as: 'forums',
    });
  }
}

User.init(sequelize);

module.exports = User;
