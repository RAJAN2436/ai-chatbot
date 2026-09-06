import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {
    try {

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization":
                        `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "user",
                            content: req.body.message
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        console.log(data);

        if (data.choices) {
            res.json({
                reply:
                    data.choices[0]
                    .message.content
            });
        } else {
            res.json({
                reply:
                    JSON.stringify(data)
            });
        }

    } catch (error) {

        res.json({
            reply: error.message
        });
    }
});

app.listen(3000, () => {
    console.log(
        "Server running on http://localhost:3000"
    );
});