const HOST = "127.0.0.1"
const PORT = "5001"
const express = require("express")
const mailerRouter = require("./routes/mailerRouter")
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"))
app.use(mailerRouter)

app.listen(PORT, HOST, () => {
  console.log(`Listening @ ${HOST}:${PORT}`)
})
