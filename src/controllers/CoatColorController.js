import models from "../db/models";

export default {
  async index(req, res) {
    try {
      const coatColors = await models.CoatColor.findAll();

      if (!coatColors) {
        return res.status(400).json({ message: "Coat Colors does not exists" });
      }

      return res.json(coatColors);
    } catch (error) {
      return res.json(error);
    }
  },
};
