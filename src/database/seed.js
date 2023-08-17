// const DemoModel = require('../models/DemoModel');
const { logger } = require('../utils');
const { connectToDatabase, closeDatabaseConnection } = require('./db');
const { createWebinarData } = require('./webinarSeed');

const connectDbWithDynamicEnviroment = async () => {
    if (process.argv.includes('--testDB')) {
        process.env.NODE_CONFIG_ENV = 'test';
        process.NODE_ENV = 'test';
    }
    // eslint-disable-next-line global-require
    await connectToDatabase();
};
const dbSeed = async () => {
    try {
        await connectDbWithDynamicEnviroment();
        // eslint-disable-next-line global-require
        await createWebinarData();

        logger.info('Demo data created successfully');
        closeDatabaseConnection();
        process.exit(0);
    } catch (error) {
        logger.error('Failed to create demo data:', error);
        closeDatabaseConnection();
        process.exit(1); // Exit the process with a non-zero code
    }
};

dbSeed();
