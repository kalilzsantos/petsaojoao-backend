import { Model } from "sequelize";
import { getDateToday } from "../../utils/date";
export default class Pet extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          allowNull: false,
          type: DataTypes.STRING(100),
        },
        breed_id: {
          allowNull: false,
          references: {
            model: "breeds",
            key: "id",
          },
          type: DataTypes.INTEGER,
        },
        genre: {
          allowNull: false,
          type: DataTypes.STRING(1),
        },
        date_birth: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        coat_color_id: {
          allowNull: false,
          references: {
            model: "coat_colors",
            key: "id",
          },
          type: DataTypes.INTEGER,
        },
        size: {
          allowNull: false,
          type: DataTypes.STRING(1),
        },
        castrated: {
          allowNull: false,
          defaultValue: false,
          type: DataTypes.BOOLEAN,
        },
        microship_serial: {
          unique: true,
          type: DataTypes.STRING,
        },
        tutor_id: {
          allowNull: false,
          references: {
            model: "tutors",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "cascade",
          type: DataTypes.INTEGER,
        },
      },
      { sequelize, tableName: "pets", modelName: "Pet" }
    );
  }

  static getTotal() {
    return Pet.count();
  }

  static getTotalToday() {
    return Pet.count({
      where: Pet.sequelize.where(
        Pet.sequelize.fn("date", Pet.sequelize.col("created_at")),
        "=",
        getDateToday()
      ),
    });
  }

  static associate(models) {
    Pet.hasMany(models.PetPhoto);
  }
}
