const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
const NAME = 'quyenhoang'

// Middleware bodyparser
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('This test route is working just fine')
})

app.get(`/${NAME}`, (req, res) => {
  res.status(200).json(`Request to ${NAME} route successful`)
})

app.post('/', (req, res) => {
  const query = req.body
  console.log(query)
  if (!query.user) {
    res.status(400).json('Create request unsuccessful, please send a JSON body with a user property')
  } else {
    res.status(201).json(`Request to create ${query.user} successful`)
  }
})

app.put('/:id', (req, res) => {
  const query = req.params
  if (!query.id) {
    res.status(400).json('Update request unsuccessful, please include a fake id in the address path')
  } else {
    res.status(200).json(`Request to update ${query.id} successful`)
  }
})

app.delete('/:id', (req, res) => {
  const query = req.params
  if (!query.id) {
    res.status(400).json('Delete request unsuccessful, please include a fake id in the address path')
  } else {
    res.status(200).json(`Request to delete ${query.id} successful`)
  }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
