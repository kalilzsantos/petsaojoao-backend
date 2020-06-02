module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("found_pets", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tutors",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    return queryInterface.dropTable("found_pets");
  },
};
