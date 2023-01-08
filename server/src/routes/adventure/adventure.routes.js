import { Router } from "express";
import { getAdventures, getAdventure, createAdventure, updateAdventure, deleteAdventure } from "../../controllers/adventure.controller.js";

const router = Router();

router.get("/", getAdventures)

router.get("/:id", getAdventure)

router.post('/', createAdventure)

router.put('/:id', updateAdventure)

router.delete('/:id', deleteAdventure)

export default router;