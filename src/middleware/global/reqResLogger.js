const { logger } = require('../../utils');

const reqResLogger = (req, res, next) => {
  const { method, url, body, params, query, ip, id } = req;
  logger.info(`Received ${method} request #${id} from ip ${ip} to ${url}`, {
    body,
    params,
    query,
  });

  res.on('finish', () => {
    const { statusCode } = res;
    logger.info(`Responded with ${statusCode} to ${url}`);
  });

  next();
};

module.exports = reqResLogger;
