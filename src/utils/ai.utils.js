const axios = require("axios");

const getAIResponse = async (question) => {
  try {
    const response = await axios.post(
      `${process.env.GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: question }]
          }
        ]
      }
    );

    const text =
      response.data.candidates[0].content.parts[0].text;

    
    const words = text.replace(/[^a-zA-Z ]/g, "").split(" ");
    const capitalizedWords = words.filter(
      (w) => w.length > 1 && w[0] === w[0].toUpperCase()
    );

    
    return capitalizedWords[capitalizedWords.length - 1] || "Mumbai";

  } catch (err) {
    console.error("Gemini API failed:", err.message);
    return "Mumbai";
  }
};

module.exports = { getAIResponse };
