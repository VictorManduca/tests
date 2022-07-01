const express = require('express')

const app = express()
app.use(express.json())

const port = 8000

app.post('/', (req, res) => {
  const body = req.body

  let inc = 0
  let out = 0

  for (let i = 0; i < body.income.length; i++) {
    inc += body.income[i]
  }

  for (let i = 0; i < body.outcome.length; i++) {
    out += body.outcome[i]
  }

  const sum = inc - out

  if (sum > 0) {
    return res.json({
      message: `Your profit: ${sum}`
    })
  } else if (sum < 0) {
    return res.json({
      message: `Your deficit: ${sum}`
    })
  } else {
    return res.json({
      message: `Your balance: ${sum}`
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})