module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("found_pet_photos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      found_pet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "found_pets",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("found_pet_photos");
  },
};
