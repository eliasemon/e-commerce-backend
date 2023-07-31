const { logger } = require('../../utils');

const errorHandler = (error, req, res, next) => {
  logger.error('Error:', error);

  if (error.status) {
    res.status(error.status).send(error.message);
  } else {
    res.status(500).send('Something went wrong');
  }

  next(error);
};

module.exports = errorHandler;
