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

    const cards = await Card.find(query);
    res.json(cards);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
