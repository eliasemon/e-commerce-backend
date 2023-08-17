const http = require('http');
const config = require('config');
const app = require('./app');
const { logger } = require('./utils');
const { connectToDatabase } = require('./database/db');

const server = http.createServer(app);
const PORT = config.get('port') || 4000;

const main = async () => {
    try {
        await connectToDatabase();
        server.listen(PORT, async () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch (e) {
        logger.error('Database Error');
        logger.error(e);
    }
};
main();
