import express from "express";
import cors from "cors"; // Importa cors
import { createStripeSession } from "./createStripeSession.js";

const app = express();
const port = process.env.PORT || 5000;

// Configura CORS per permettere richieste dal tuo dominio frontend
const corsOptions = {
  origin: "https://www.riatarchidecor.it", // Sostituisci con il tuo dominio frontend
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions)); // Applica CORS
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
