const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  console.log("OK")
  res.send('ok')
})



app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
  console.log("----------")
  console.log("----------")
  console.log("----------")
  console.log("----------")
  console.log("----------")
  /* eslint-enable no-console */
})

