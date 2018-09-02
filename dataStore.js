let store = []

addDataStore = (req, res, next) => {
  req.store = store
  next()
}

module.exports = addDataStore
