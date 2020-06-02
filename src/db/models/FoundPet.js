import { Model } from "sequelize";

export default class FoundPet extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        tutor_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "tutors",
            key: "id",
          },
          allowNull: false,
        },
        anonymous: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        lat: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        lng: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        note: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      { sequelize, tableName: "found_pets", modelName: "FoundPet" }
    );
  }

  static associate(models) {
    this.hasMany(models.FoundPetPhoto, {
      foreignKey: "found_pet_id",
    });
    this.belongsTo(models.Tutor, {
      foreignKey: "tutor_id",
    });
  }
}
