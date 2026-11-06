import express from "express";
import { getCards, getCardById } from "../controllers/cardController.js";

const router = express.Router();

router.get("/", getCards);
router.get("/:id", getCardById);

export default router;
