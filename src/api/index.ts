import axios from "axios"

export const getTranslation = (input: string) => {
  const data = {
    model: "deepseek-chat",
    messages: [
      {
        role: "user",
        content: `You are a translator. Translate the following text from English to Farsi. Don't add any explanation: "${input}"`
      }
    ]
  }
  return axios
    .post("https://api.deepseek.com/v1/chat/completions", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PLASMO_PUBLIC_DEEPSEEK_API_KEY}`
      }
    })
    .then((res) => res.data.choices[0].message.content)
}

export const getGeneration = ({
  input,
  format,
  size
}: {
  input: string
  size: string
  format: string
}) => {
  const data = {
    model: "deepseek-chat",
    messages: [
      {
        role: "user",
        content: `Please rewrite below text in length ${size} and format ${format} in English:"${input}"`
      }
    ]
  }
  return axios
    .post("https://api.deepseek.com/v1/chat/completions", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PLASMO_PUBLIC_DEEPSEEK_API_KEY}`
      }
    })
    .then((res) => res.data.choices[0].message.content)
}
