const HOST = "127.0.0.1"
const PORT = "5001"
const express = require("express")
const mailerRouter = require("./routes/mailerRouter")
const app = express()
const path = require("path")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use("/mailer", mailerRouter)
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, HOST, () => {
  console.log(`Listening @ ${HOST}:${PORT}`)
})
