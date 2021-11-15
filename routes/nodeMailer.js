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
      url: process.env.CALENDAR_ULR,
      organizer: {
        name: process.env.CALENDAR_ULR,
        email: process.env.USERN,
      },
    },
  ])

  let info = await transporter.sendMail({
    from: '"ZZ időpont BOT" <mailer@zz.hu>',
    to: [
      { name: "Suti", address: process.env.SUTI },
      { name: "Vera", address: process.env.VERA },
    ],
    subject: subject,
    text: message,
    html: message,
    //method: "REQUEST",
    icalEvent: {
      method: "REQUEST",
      content: calendarEvent.toString(),
    },
  })

  console.log("Message sent: %s", info.messageId)
}
