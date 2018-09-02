module.exports = {
  getPosts(req, res) {
    if (req.query.id) {
      res.send(req.store[req.query.id])
    }
    res.send(req.store)
  },
  addPost(req, res) {
    if (!req.body.comments) {
      req.body['comments'] = []
    }
    req.store.push(req.body)
    res.sendStatus(201)
  },
  updatePost(req, res) {
    req.store[req.params.postId] = req.body
    res.send(201, req.store[req.params.postId])
  },
  deletePost(req, res) {
    req.store.splice(req.params.postId, 1)
    res.sendStatus(200)
  }
}
