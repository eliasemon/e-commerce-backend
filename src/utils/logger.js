const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [
        new DailyRotateFile({
            filename: 'logs/app-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '30d',
            level: 'info',
            format: winston.format.json(),
        }),
        new DailyRotateFile({
            filename: 'logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '30d',
            level: 'error',
            format: winston.format.json(),
        }),
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.printf((info) => {
                    const { level, message, timestamp } = info;
                    return `[${timestamp}] ${level}: ${message}`;
                }),
            ),
        }),
    ],
});

module.exports = logger;
