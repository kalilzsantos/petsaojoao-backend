import express from "express";
import TutorController from "../controllers/TutorController";
import SpecieController from "../controllers/SpecieController";
import BreedController from "../controllers/BreedController";
import PetController from "../controllers/PetController";
import PetPhotoController from "../controllers/PetPhotoController";

const routes = express.Router();

routes.post("/tutors", TutorController.store);
routes.get("/tutors/:tutorId", TutorController.show);
routes.get("/species", SpecieController.index);
routes.get("/species/:specidId/breeds", BreedController.index);
routes.post("/tutors/:tutorId/pets", PetController.store);
routes.get("/tutors/:tutorId/pets", PetController.index);
routes.post("/pets/:petId/photos", PetPhotoController.store);
routes.get("/pets/:petId/photos", PetPhotoController.index);

routes.get("/", (req, res) => {
  res.json({ message: "API Route" });
});

export default routes;
