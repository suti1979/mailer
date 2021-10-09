const HOST = "127.0.0.1"
const PORT = "5000"
const express = require("express")
const mailerRouter = require("./routes/mailerRouter")
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use("/mailer", mailerRouter)

app.listen(PORT, HOST, () => {
  console.log(`Listening @ ${HOST}:${PORT}`)
})