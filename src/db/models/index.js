import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import config from "../../config/database";

const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env]
);

const models = Object.assign(
  {},
  ...fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return (
        file.indexOf(".") !== 0 &&
        file !== path.basename(__filename) &&
        file.slice(-3) === ".js"
      );
    })
    .map(function (file) {
      const model = require(path.join(__dirname, file)).default;

      return {
        [model.name]: model.init(sequelize, DataTypes),
      };
    })
);

Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

export default models;
