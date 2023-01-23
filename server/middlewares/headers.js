const mwHeaders = (req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE'
  );

  next();
}

module.exports = mwHeaders;