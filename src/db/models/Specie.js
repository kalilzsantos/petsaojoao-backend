import { Model } from "sequelize";

export default class Specie extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          allowNull: false,
          type: DataTypes.STRING(40),
        },
      },
      { sequelize, tableName: "species", modelName: "Specie" }
    );
  }

  static associate(models) {
    Specie.hasMany(models.Breed);
  }
}
