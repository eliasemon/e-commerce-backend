const cluster = require('cluster');
const os = require('os');
const path = require('path');
const { logger } = require('./utils');

const cpuCount = os.cpus().length;

logger.info(`The total number of CPUs is ${cpuCount}`);
logger.info(`Primary process ID: ${process.pid}`);

cluster.setupPrimary({
  exec: path.join(__dirname, './index.js'),
});

for (let i = 0; i < cpuCount; i += 1) {
  cluster.fork();
}

cluster.on('exit', (worker) => {
  logger.info(`Worker ${worker.process.pid} has been killed`);
  logger.info('Starting another worker');
  cluster.fork();
});
