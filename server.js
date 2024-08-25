import express from "express";
import { createStripeSession } from "./createStripeSession.js"; // Assicurati che il percorso sia corretto

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { amount, description } = req.body;

  try {
    const sessionId = await createStripeSession({ amount, description });
    res.json({ id: sessionId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
