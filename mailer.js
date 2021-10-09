"use strict"
const nodemailer = require("nodemailer")
require("dotenv").config()

async function main() {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    // add this for antivirus
    tls: { rejectUnauthorized: false },
  })

  let info = await transporter.sendMail({
    from: '"Suti Foo 👻" <mailer@zz.hu>',
    to: "suti1979@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  })

  console.log("Message sent: %s", info.messageId)

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}

main().catch((e) => {
  console.log("Something went wrong: ", e)
})
