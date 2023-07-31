const express = require('express');
const cors = require('cors');
const { routesCombinator } = require('./utils');
const { notFoundHandler, errorHandler } = require('./middleware/global');

const app = express();
app.use(cors());
app.use(express.json());

// Request id generator middleware
app.use(require('./middleware/global/reqIdGenerator'));

// request response logger middleware
app.use(require('./middleware/global/reqResLogger'));

// combining all routes
app.use(routesCombinator(require('./routes')));

// 404 Not Found middleware
app.use(notFoundHandler);

// Global error handling middleware
app.use(errorHandler);

module.exports = app;
