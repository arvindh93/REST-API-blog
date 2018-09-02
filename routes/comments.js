module.exports = {
  getComments(req, res) {
    if (req.params.commentId) {
      res.send(req.store[req.params.postId]['comments'][req.params.commentId])
    }
    res.send(req.store[req.params.postId]['comments'])
  },
  addComment(req, res) {
    req.store[req.params.postId]['comments'].push(req.body)
    res.sendStatus(201)
  },
  updateComment(req, res) {
    req.store[req.params.postId]['comments'][req.params.commentId] = req.body
    res.send(201, req.store[req.params.postId]['comments'][req.params.commentId])
  },
  deleteComment(req, res) {
    req.store[req.params.postId]['comments'].splice(req.params.commentId, 1)
    res.sendStatus(200)
  }
}
