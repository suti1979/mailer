// CapchaCheck by Suti1979 V1.0.1
require("dotenv").config()
const fetch = require("node-fetch")
const { stringify } = require("querystring")
const secretKey = process.env.secretKeyV3Google
const robotMSG =
  "Google reCaptcha thinks that you are a robot... Are you a Robot?"

module.exports = (req, res, next) => {
  if (!req.body.token) {
    return res.json({
      success: false,
      msg: robotMSG,
    })
  }

  const query = stringify({
    secret: secretKey,
    response: req.body.token,
    remoteip: req.connection.remoteAddress,
  })
  const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`

  fetch(verifyURL)
    .then((res) => res.json())
    .then((resCaptcha) => {
      if (resCaptcha.success === false || resCaptcha.score < 0.5) {
        resCaptcha.msg = robotMSG
        return res.json(resCaptcha)
      }
      next()
    })
    .catch((err) => console.error(err))
}
