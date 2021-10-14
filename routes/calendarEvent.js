const ical = require("ical-generator")

const cal = ical()

cal.events([
  {
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: "Example Event",
    description: "It works ;)",
    url: "https://ledurts.hu",
  },
])

console.log(cal.toString())

// await calendar.save('./calendar.ical');

// http
//   .createServer((req, res) => calendar.serve(res))
//   .listen(3000, "127.0.0.1", () => {
//     console.log("Server running at http://127.0.0.1:3000/")
//   })

// var nodemailer = require("nodemailer")
// var smtpTransport = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "tesgmailaccount@gmail.com",
//     pass: "gmailapppassword",
//   },
// })
// async function sendemail(sendto, subject, htmlbody, calendarObj = null) {
//   mailOptions = {
//     to: sendto,
//     subject: subject,
//     html: htmlbody,
//   }
//   if (calendarObj) {
//     let alternatives = {
//       "Content-Type": "text/calendar",
//       method: "REQUEST",
//       content: new Buffer(calendarObj.toString()),
//       component: "VEVENT",
//       "Content-Class": "urn:content-classes:calendarmessage",
//     }
//     mailOptions["alternatives"] = alternatives
//     mailOptions["alternatives"]["contentType"] = "text/calendar"
//     mailOptions["alternatives"]["content"] = new Buffer(calendarObj.toString())
//   }
//   smtpTransport.sendMail(mailOptions, function (error, response) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log("Message sent: ", response)
//     }
//   })
// }
// module.exports = {
//   sendemail,
// }
///////

// const ical = require("ical-generator")
// function getIcalObjectInstance(
//   starttime,
//   endtime,
//   summary,
//   description,
//   location,
//   url,
//   name,
//   email
// ) {
//   const cal = ical({
//     domain: "mytestwebsite.com",
//     name: "My test calendar event",
//   })
//   cal.domain("mytestwebsite.com")
//   cal.createEvent({
//     start: starttime, // eg : moment()
//     end: endtime, // eg : moment(1,'days')
//     summary: summary, // 'Summary of your event'
//     description: description, // 'More description'
//     location: location, // 'Delhi'
//     url: url, // 'event url'
//     organizer: {
//       // 'organizer details'
//       name: name,
//       email: email,
//     },
//   })
//   return cal
// }

// console.log(getIcalObjectInstance(1, 1))
