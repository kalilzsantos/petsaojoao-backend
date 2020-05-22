"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tutors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(80),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      rg: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(15),
      },
      cpf: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(11),
      },
      phone: Sequelize.STRING(10),
      whatsapp: Sequelize.STRING(11),
      cep: {
        allowNull: false,
        type: Sequelize.STRING(8),
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      number: Sequelize.STRING(30),
      area: Sequelize.STRING(100),
      complement: Sequelize.STRING(30),
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tutors");
  },
};
