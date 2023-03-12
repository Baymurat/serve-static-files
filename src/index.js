const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => {
  console.log('Application started on port:', PORT);
})