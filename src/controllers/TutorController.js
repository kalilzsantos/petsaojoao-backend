import models from "../db/models";

export default {
  async show(req, res) {
    try {
      const { tutorId } = req.parms;

      const tutor = await models.Tutor.findByPk(tutorId);

      if (!tutor) {
        return res.status(400).json({ message: "Tutor does not exists" });
      }

      return res.json(tutor);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    try {
      const { cpf } = req.body;
      const [tutor] = await models.Tutor.findOrCreate({
        where: { cpf },
        defaults: req.body,
      });

      return res.json(tutor);
    } catch (error) {
      return res.json(error);
    }
  },
};
