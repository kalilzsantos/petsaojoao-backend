import { Model } from "sequelize";

export default class RegisterContact extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        email: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING(80),
        },
        phone: DataTypes.STRING(10),
        whatsapp: DataTypes.STRING(11),
      },
      { sequelize, tableName: "register", modelName: "RegisterContact" }
    );
  }
}
