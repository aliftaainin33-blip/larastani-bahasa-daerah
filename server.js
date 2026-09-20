const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 5500;

app.use(express.json());
app.use(express.static("."));

app.post("/api/tanya-pakar", async (req, res) => {
  try {
    const { message, language } = req.body;

    const languages = {
      id: "Bahasa Indonesia",
      jv: "Bahasa Jawa",
      su: "Bahasa Sunda",
      mad: "Bahasa Madura",
      ban: "Bahasa Bali"
    };

    const languageName = languages[language] || "Bahasa Indonesia";

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          {
            role: "system",
            content: `Kamu adalah LarasTani, asisten pertanian untuk petani lansia.
Jawab menggunakan ${languageName}.
Gunakan bahasa sederhana, ramah, dan mudah dipahami.
Analisis cerita petani tentang tanaman, kemungkinan penyebab, langkah penanganan, dan hal yang perlu dipantau.
Jangan menyatakan diagnosis sebagai kepastian jika informasinya belum cukup.`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return res.status(500).json({
        answer: "Maaf, LarasTani sedang mengalami kendala."
      });
    }

    res.json({
      answer: data.choices[0].message.content
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      answer: "Maaf, LarasTani sedang mengalami kendala."
    });
  }
});

app.listen(PORT, () => {
  console.log(`LarasTani berjalan di http://localhost:${PORT}`);
});