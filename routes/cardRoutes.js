import express from "express";
import { getCards } from "../controllers/cardController.js";

const router = express.Router();

router.get("/", getCards);

export default router;
