const express = require("express")
const nodeMailer = require("./nodeMailer")
const router = express.Router()
const captchaCheck = require("./capchaCheck")

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", captchaCheck, (req, res) => {
  nodeMailer(req.body)
    .then(() => res.send("Message sent."))
    .catch((error) => res.send("Someting went wrong... :( " + error))
})

router.get("*", (req, res) => {
  res.render("404")
})

module.exports = router
//res.render("index", { serverMessage: "event sent" })
