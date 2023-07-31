const http = require('http');
const config = require('config');
const app = require('./app');
const { logger } = require('./utils');

const server = http.createServer(app);
const PORT = config.get('port') || 4000;

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
