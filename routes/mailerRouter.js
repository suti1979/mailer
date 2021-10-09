const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", async (req, res, next) => {
  console.log(req.body.message)
  // send mail middleware
  // capcha middleware
  res.send("ok")
})

module.exports = router
