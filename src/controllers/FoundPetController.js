import * as Yup from "yup";
import FoundPet from "../db/models/FoundPet";

class FoundPetController {
  async store(req, res) {
    const schema = Yup.object().shape({
      tutor_id: Yup.number().required(),
      anonymous: Yup.bool().required(),
      lat: Yup.number().required(),
      lng: Yup.number().required(),
      note: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Bad Request. Missing or wrong data!" });
    }
    try {
      const { id } = await FoundPet.create(req.body);
      //call notification service here

      return res
        .status(201)
        .json({ succes: "Found Pet created successfully!" });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
  async show(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      const fPet = await FoundPet.findByPk(id);
      console.log(fPet);
      if (!fPet) {
        return res.status(404).json({ error: "Pet not found!" });
      }

      return res.status(200).json(fPet);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default new FoundPetController();
