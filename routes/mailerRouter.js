const express = require("express")
const nodeMailer = require("./nodeMailer")
const router = express.Router()
const captchaCheck = require("./capchaCheck")

router.get("/", (req, res) => {
  res.render("index", { message: "" })
})

router.post("/", captchaCheck, (req, res) => {
  nodeMailer(req.body)
    .then(() => res.render("index", { message: "OK" }))
    .catch((error) =>
      res.render("index", {
        message: "err",
        err: error,
      })
    )
})

router.get("*", (req, res) => {
  res.render("404")
})

module.exports = router
