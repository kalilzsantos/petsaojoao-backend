import { Model } from "sequelize";
import { getDateToday } from "../../utils/date";

export default class PetPhoto extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        pet_id: {
          allowNull: false,
          references: {
            model: "pets",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "cascade",
          type: DataTypes.INTEGER,
        },
        url: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      { sequelize, tableName: "pet_photos", modelName: "PetPhoto" }
    );
  }

  static getTotal() {
    return PetPhoto.count();
  }

  static getTotalToday() {
    return PetPhoto.count({
      where: PetPhoto.sequelize.where(
        PetPhoto.sequelize.fn("date", PetPhoto.sequelize.col("created_at")),
        "=",
        getDateToday()
      ),
    });
  }
}
