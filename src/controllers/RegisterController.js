import models from "../db/models";

export default {
  async show(req, res) {
    try {
      const { registerId } = req.parms;

      const register = await models.Register.findByPk(registerId);

      if (!register) {
        return res.status(400).json({ message: "Register does not exists" });
      }

      return res.json(register);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    try {
      const { registerId } = req.body;
      const [register] = await models.Register.findOrCreate({
        where: { registerId },
        defaults: req.body,
      });

      return res.json(register);
    } catch (error) {
      return res.json(error);
    }
  },
};
