const dotenv = require('dotenv');

dotenv.config();

const config = {
    port: 4000,
    mode: 'test',
    DB_URL: `${process.env.DB_URL}`,
    DB_USERNAME: `${process.env.DB_USERNAME}`,
    DB_PASSWORD: `${process.env.DB_PASSWORD}`,
    DB_NAME: `${process.env.TEST_DB_NAME}`,
};

module.exports = config;
