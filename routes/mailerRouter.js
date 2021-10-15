const express = require("express")
const nodeMailer = require("./nodeMailer")
const router = express.Router()
//const captchaCheck = require("./capchaCheck")

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", (req, res) => {
  nodeMailer(req.body)
    .then(() => res.render("index", { serverMessage: "event sent" }))
    .catch((error) => res.send("Someting went wrong... :( " + error))

  // capcha middleware
  //
})

module.exports = router
