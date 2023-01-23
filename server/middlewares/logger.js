function mwLogger(req, res, next) {
  console.log('url ->', req.url);
  console.log('body ->', req.body);
  console.log('params ->', req.params);
  console.log('= = = = =');

  next();
}

module.exports = mwLogger;