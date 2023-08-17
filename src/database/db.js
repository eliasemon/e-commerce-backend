// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const config = require('config');
const { logger } = require('../utils');

let connectionURL = config.get('DB_URL');
connectionURL = connectionURL.replace('<USERNAME>', config.get('DB_USERNAME'));
connectionURL = connectionURL.replace('<PASSWORD>', config.get('DB_PASSWORD'));
const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionURL, {
            dbName: config.get('DB_NAME'),
        });
        logger.info('Connected to the database');
    } catch (error) {
        logger.error('Failed to connect to the database', error);
        process.exit(1);
    }
};

const closeDatabaseConnection = async () => {
    await mongoose.disconnect();
};

module.exports = {
    connectToDatabase,
    closeDatabaseConnection,
};
