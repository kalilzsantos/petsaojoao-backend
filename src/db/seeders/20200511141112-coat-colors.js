"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "coat_colors",
      [
        {
          name: "Preto",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Branco",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Amarelo",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Marrom",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("coat_colors", null, {});
  },
};
