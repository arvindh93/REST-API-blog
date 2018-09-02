validation = (req, res, next) => {
  if (req.url == "/posts" || (!req.url.match(/comments/))) {
    if (req.method == 'post' || req.method == 'put') {
      if (!req.name.trim() || !req.url.trim() || !req.text.trim()) {
        res.sendStatus(400)
      }
    }
  }
  next()
}

module.exports = validation
