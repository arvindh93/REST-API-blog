validation = (req, res, next) => {
  if (req.url == "/posts" || (!req.url.match(/comments/))) {
    if (req.method == 'PUT' || req.method == 'DELETE') {
      if (typeof req.store[req.params.postId] == "undefined") {
        res.sendStatus(404)
      }
    }
    if (req.method == 'POST' || req.method == 'PUT') {
      if (!req.name.trim() || !req.url.trim() || !req.text.trim()) {
        res.sendStatus(400)
      }
    }
  } else if (req.url.match(/comments/)) {
    if (req.method == 'PUT' || req.method == 'DELETE') {
      if (typeof req.store[req.params.postId] == "undefined") {
        res.sendStatus(404)
      }
      if (typeof req.store[req.params.postId]['comments'][req.params.commentId] == "undefined") {
        res.sendStatus(404)
      }
    }
  }
  next()
}

module.exports = validation
