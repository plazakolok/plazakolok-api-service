const express = require('express')
const app = express()
const port = process.env.POST || 3000


app.get('/', (req, res) => {
  res.send({
    version: '1.0.3'
  })
})
app.get('/login', (req, res) => {
  res.send({
    code: 200,
    success: true
  })
})

app.listen(port, console.log(`Server is running at port ${port}`))