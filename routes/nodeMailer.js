const nodemailer = require("nodemailer")
require("dotenv").config()
const util = require("util")

module.exports = async function nodeMailer(message) {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    //secure: true,
    secureConnection: false,
    auth: {
      user: process.env.USERN, //on mac local ENV user...
      pass: process.env.PASS,
    },
    // add this for eg antivirus
    tls: { rejectUnauthorized: false, ciphers: "SSLv3" },
  })

  console.log(util.inspect(transporter, false, null, true /* enable colors */))

  let info = await transporter.sendMail({
    from: '"Suti Foo 👻" <mailer@zz.hu>',
    to: "suti1979@gmail.com",
    subject: "Message from node",
    text: message, // plain text body
    html: message, // html body
  })

  console.log("Message sent: %s", info.messageId)

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}
