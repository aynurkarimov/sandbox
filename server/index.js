const express = require('express');
const initServer = require('./config/initServer');
const groceriesRoute = require('./routes/groceries');
const {
  mwNotFound,
  mwLogger,
  mwErrorHandler,
  mwHeaders
} = require('./middlewares');

const server = express();

require('dotenv').config();

server.disable('etag');

server.use(express.json());
server.use(mwLogger);
server.use(mwHeaders);

server.use('/api/v1/groceries', groceriesRoute);

server.use(mwNotFound);
server.use(mwErrorHandler);

initServer(server);