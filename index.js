import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
  // fill ChatGPT API Key
  organization: "",
  apiKey: "",
});

const openai = new OpenAIApi(configuration);

// express
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

  const { messages } = req.body;

  console.log(messages)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      // { role: "user", content: `${message}` }
      // Declare the role AI needs to play for you
      {"role": "system", "content": "You are a helpful assistant."},
      ...messages
    ]
  });

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{ role: "user", content: "Hello World" }],
// });

// console.log(completion.data.choices[0].message)