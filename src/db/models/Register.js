import { Model } from "sequelize";

export default class Register extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        email: {
          allowNull: false,
          unique: true,
        },
        phone: DataTypes.STRING(10),
        whatsapp: DataTypes.STRING(11),
      },
      { sequelize, tableName: "register", modelName: "Register" }
    );
  }
}
