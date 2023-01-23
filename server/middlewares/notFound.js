function mwNotFound(req, res, next) {
  res.status(404).send({ status: 'error', message: "Not found" });
  next();
}

module.exports = mwNotFound;