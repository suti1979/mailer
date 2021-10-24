require("dotenv").config()
const nodemailer = require("nodemailer")
const ical = require("ical-generator")
const calendarEvent = ical()
const sanitizeHtml = require("sanitize-html")

module.exports = async function nodeMailer(body) {
  const message = sanitizeHtml(body.message)
  const subject = sanitizeHtml(body.subject)
  const date = body.date
  const dateExp = new Date(new Date(date).getTime() + 1000 * 60 * 60)
  //console.log(message, subject, date)

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

  calendarEvent.events([
    {
      start: date,
      end: dateExp,
      summary: subject,
      description: message,
      url: "zzhu",
      organizer: {
        name: "ZZ",
        email: "info@zz.hu",
      },
    },
  ])

  let info = await transporter.sendMail({
    from: '"ZZ időpont BOT 👻" <mailer@zz.hu>',
    to: [
      { name: "Vera", address: "szepesi.vera@gmail.com" },
      { name: "András", address: "andras.zold@zz.hu" },
      { name: "Laci", address: "kovesilaci@gmail.com" },
    ],
    subject: subject,
    text: message,
    html: message,
    icalEvent: {
      method: "request",
      content: calendarEvent.toString(),
    },
  })

  console.log("Message sent: %s", info.messageId)
}
