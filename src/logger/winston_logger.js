
const winston = require('winston');

const logger = winston.createLogger({

    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(( { timestamp, level, message } ) => {
        return `Log ${level}: ${timestamp} >> ${message}`;
      })
    ),
    transports: [new winston.transports.Console()]

});

module.exports = logger;
