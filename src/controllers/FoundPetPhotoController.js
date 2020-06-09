import models from "../db/models";

export default {
  async index(req, res) {
    const { id } = req.params;
    try {
      const pet = await models.FoundPet.findByPk(id);

      if (!pet) {
        return res.status(400).json({ message: "Found Pet does not exists" });
      }

      const photos = await pet.getPetPhotos();

      if (!photos.length) {
        return res.status(400).json({ message: "Found Pet has no photos" });
      }

      return res.json(photos);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { id } = req.params;
    try {
      const pet = await models.FoundPet.findByPk(id);

      if (!pet) {
        return res.status(400).json({ message: "Found Pet does not exists" });
      }

      return res.json(await pet.createFoundPetPhoto(req.body));
    } catch (error) {
      return res.json(error);
    }
  },
};
