// CapchaCheck by Suti1979 V1.0.1
require("dotenv").config()
const axios = require("axios")
const { stringify } = require("querystring")
const secretKey = process.env.secretKeyV3Google
const robotMSG =
  "Google reCaptcha thinks that you are a robot... Are you a Robot?"

module.exports = (req, res, next) => {
  if (!req.body["g-recaptcha-response"]) {
    return res.json({
      success: false,
      msg: robotMSG,
    })
  }

  const query = stringify({
    secret: secretKey,
    response: req.body["g-recaptcha-response"],
    remoteip: req.connection.remoteAddress,
  })
  const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`

  axios
    .post(verifyURL)
    .then((resCaptcha) => {
      if (resCaptcha.data.success === false || resCaptcha.data.score < 0.5) {
        return res.json(robotMSG)
      }
      console.log(resCaptcha.data)
      next()
    })
    .catch((err) => console.error(err))
}
