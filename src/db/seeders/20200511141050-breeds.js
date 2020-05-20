"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "breeds",
      [
        {
          name: "Pastor-alemão",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Buldogue Francês",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Buldogue Inglês",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Poodle",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Beagle",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bernese",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Akita",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Basset Hound",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bichon Frisé",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Border Collie",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Boiadeiro Australiano",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Boston Terrier",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Boxer",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bull Terrier",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Cane Corso",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Chihuahua",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Chow Chow",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dachshund",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dálmata",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Doberman",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dogo Argentino",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dogue Alemão",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fila Brasileiro",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Golden Retriever",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Husky Siberiano",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Labrador Retriever",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lhasa Apso",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lulu da Pomerânia",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maltês",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mastiff Inglês",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mastim Tibetano",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pinscher",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pit Bull",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pug",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Rottweiler",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Shih Tzu",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Yorkshire",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Persa",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maine Coon",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Siamês",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sphynx",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Angorá",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("breeds", null, {});
  },
};
