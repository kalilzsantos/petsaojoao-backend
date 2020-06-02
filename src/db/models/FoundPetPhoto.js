import { Model } from "sequelize";

export default class FoundPetPhoto extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        found_pet_id: {
          allowNull: false,
          references: {
            model: "found_pets",
            key: "id",
          },
          type: DataTypes.INTEGER,
        },
        url: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      { sequelize, tableName: "found_pet_photos", modelName: "FoundPetPhoto" }
    );
  }

  static associate(models) {
    this.belongsTo(models.FoundPet, {
      foreignKey: "found_pet_id",
    });
  }
}
