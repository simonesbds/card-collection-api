import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    game: { type: String, required: true, trim: true },
    rarity: { type: String, trim: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true },
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
