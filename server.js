const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dataStore = require('./dataStore.js')
const routes = require('./routes')
const validation = require('./validation.js')

const app = express()

app.use(dataStore)
app.use(bodyParser.json())
app.use(validation)
app.use(logger('dev'))

app.get('/posts', (req, res) => {
  routes.getPosts(req, res)
})

app.post('/posts', (req, res) => {
  routes.addPost(req, res)
})

app.put('/posts/:postId', (req, res) => {
  routes.updatePost(req, res)
})

app.delete('/posts/:postId', (req, res) => {
  routes.deletePost(req, res)
})

app.get('/posts/:postId/comments', (req, res) => {
  routes.getComments(req, res)
})

app.post('/posts/:postId/comments', (req, res) => {
  routes.addComment(req, res)
})

app.put('/posts/:postId/comments/:commentId', (req, res) => {
  routes.updateComment(req, res)
})

app.delete('/posts/:postId/comments/:commentId', (req, res) => {
  routes.deleteComment(req, res)
})

app.listen(3000)
