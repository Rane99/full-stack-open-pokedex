const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080  

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/test', (req, res) => {
  res.send('test')
})



app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
  /* eslint-enable no-console */
})

