import mongoose from "mongoose";
import Card from "../models/Card.js";

export const getCards = async (req, res) => {
  try {
    const { name } = req.query;
    const query = {};

    if (typeof name === "string" && name.trim()) {
      query.name = {
        $regex: name.trim(),
        $options: "i",
      };
    }

    const cards = await Card.find(query).sort("name");
    res.json(cards);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Card ID format" });
    }

    const card = await Card.findById(id);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json(card);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
