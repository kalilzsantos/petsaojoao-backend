import models from "../db/models";

export default {
  async index(req, res) {
    try {
      const { specieId } = req.params;

      const specie = await models.Specie.findByPk(specieId);

      if (!specie) {
        return res.status(400).json({ message: "Specie does not exists" });
      }

      const breeds = await specie.getBreeds();

      if (!breeds.length) {
        return res.status(400).json({ message: "Specie has no breeds" });
      }

      return res.json(breeds);
    } catch (error) {
      return res.json(error);
    }
  },
};
