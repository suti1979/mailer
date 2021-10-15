let date = new Date(Date.now())
const dateElement = document.getElementById("date")

date = date.toISOString().substr(0, date.toISOString().indexOf("."))
console.log("helper test: ", date)
