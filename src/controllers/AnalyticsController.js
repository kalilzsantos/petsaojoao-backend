import models from "../db/models";

export default {
  async index(req, res) {
    const { Tutor, Pet, PetPhoto } = models;
    try {
      return await res.json({
        totalRegisteredTutors: await Tutor.getTotal(),
        totalTutorsRegisteredToday: await Tutor.getTotalToday(),
        totalRegisteredPets: await Pet.getTotal(),
        totalPetsRegisteredToday: await Pet.getTotalToday(),
        totalRegisteredPetPhotos: await PetPhoto.getTotal(),
        totalPetPhotosRegisteredToday: await PetPhoto.getTotalToday(),
      });
    } catch (error) {
      return res.json(error);
    }
  },
};
