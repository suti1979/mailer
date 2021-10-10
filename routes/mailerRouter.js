const express = require("express")
const nodeMailer = require("./nodeMailer")
const router = express.Router()
const sanitizeHtml = require("sanitize-html")

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", (req, res, next) => {
  const message = sanitizeHtml(req.body.message)
  nodeMailer(message).catch((error) => console.error(error))
  // capcha middleware
  // error handeling, next()
  // set calendar
  res.redirect("ok")
})

module.exports = router
