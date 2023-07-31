const reqIdGenerator = require('./reqIdGenerator');
const reqResLogger = require('./reqResLogger');
const notFoundHandler = require('./notFoundHandler');
const errorHandler = require('./errorHandler');

module.exports = {
  reqIdGenerator,
  reqResLogger,
  notFoundHandler,
  errorHandler,
};
