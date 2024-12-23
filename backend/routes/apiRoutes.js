import express from "express";
import openai from "../config/openaiConfig.js";

const router = express.Router();

// Simple GET route to check server status
router.get("/", (req, res) => {
  res.send("Server is running. Send a POST request to /api/get-answer.");
});

// POST route to handle OpenAI API requests
router.post("/get-answer", async (req, res) => {
  const { question } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question },
      ],
    });

    const answer = completion.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error("Error fetching from OpenAI", error);
    res.status(500).json({ error: "Failed to fetch answer from OpenAI" });
  }
});

export default router;
