import { Model } from "sequelize";

export default class FoundPet extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        tutor_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "tutors",
            key: "id",
          },
          allowNull: false,
        },
        anonymous: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        lat: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        lng: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        note: {
          type: Sequelize.TEXT,
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
