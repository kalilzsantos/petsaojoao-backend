"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tutors",
      [
        {
          email: "johndoe@dummy.com",
          name: "John Doe",
          rg: "xxxxxxxx-x",
          cpf: "xxxxxxxxxxx",
          phone: "111111111",
          whatsapp: "111111111",
          cep: "13873088",
          street: "Alameda dos Anjos",
          number: "13",
          area: "Cinquenta e um",
          complement: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "jannedoe@dummy.com",
          name: "Janne Doe",
          rg: "yyyyyyyy-y",
          cpf: "yyyyyyyyyyy",
          phone: "222222222",
          whatsapp: "222222222",
          cep: "13873088",
          street: "Alameda dos Anjos",
          number: "12",
          area: "Cinquenta e um",
          complement: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tutors", null, {});
  },
};
