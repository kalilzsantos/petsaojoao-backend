import models from "../db/models";

export default {
  async index(req, res) {
    const { tutorId } = req.params;
    try {
      const tutor = await models.Tutor.findByPk(tutorId);

      if (!tutor) {
        return res.status(400).json({ message: "Tutor does not exists" });
      }

      const pets = await tutor.getPets();

      if (!pets) {
        return res.status(400).json({ message: "Tutor has no pets" });
      }

      return res.json(pets);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { tutorId } = req.params;
    try {
      const tutor = await models.Tutor.findByPk(tutorId);

      if (!tutor) {
        return res.status(400).json({ message: "Tutor does not exists" });
      }

      return res.json(await tutor.createPet(req.body));
    } catch (error) {
      return res.json(error);
    }
  },
};
