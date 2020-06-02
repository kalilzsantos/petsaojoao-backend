import models from "../db/models";

export default {
  async index(req, res) {
    const { petId } = req.params;
    try {
      const pet = await models.Pet.findByPk(petId);

      if (!pet) {
        return res.status(400).json({ message: "Pet does not exists" });
      }

      const photos = await pet.getPetPhotos();

      if (!photos.length) {
        return res.status(400).json({ message: "Pet has no photos" });
      }

      return res.json(photos);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { petId } = req.params;
    try {
      const pet = await models.Pet.findByPk(petId);

      if (!pet) {
        return res.status(400).json({ message: "Pet does not exists" });
      }

      return res.json(await pet.createPetPhoto(req.body));
    } catch (error) {
      return res.json(error);
    }
  },
};
