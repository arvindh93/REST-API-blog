const posts = require('./posts.js')
const comments = require('./comments.js')

module.exports = Object.assign(posts, comments)
