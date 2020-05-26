import models from "../db/models";

export default {
  async index(req, res) {
    try {
      const species = await models.Specie.findAll();

      if (!species.length) {
        return res.status(400).json({ message: "Species does not exists" });
      }

      return res.json(species);
    } catch (error) {
      return res.json(error);
    }
  },
};
