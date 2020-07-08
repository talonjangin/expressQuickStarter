const express = require("express")
const PORT = 8080

app = express()

app.get("/", (req, res) => {
  res.send("hello world")
})

app.listen(PORT, () => {
  console.log("server on!")
})
