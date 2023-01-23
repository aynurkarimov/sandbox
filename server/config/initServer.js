const connectDB = require('./mongoDB');
const { PORT } = require('../utils/constants');

module.exports = function initServer(server) {
  try {
    connectDB(process.env.MONGO_CRED);
    server.listen(PORT, () => console.log('Somebody has connected...'));
  } catch (error) {
    console.error('Something went wrong...', error);
    process.exit(0);
  }
};