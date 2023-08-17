const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');
const { routesCombinator } = require('./utils');
const {
    notFoundHandler,
    errorHandler,
    authenticate,
} = require('./middleware/global');

const swaggerDoc = YAML.load('./swagger/swagger.yaml');
const app = express();
app.use(cors());
app.use(express.json());

// Request id generator middleware
app.use(require('./middleware/global/reqIdGenerator'));

// request response logger middleware
app.use(require('./middleware/global/reqResLogger'));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use(
    OpenApiValidator.middleware({
        apiSpec: './swagger/swagger.yaml',
    }),
);

app.get('/health', (req, res) => {
    res.status(200).json({
        health: 'OK',
        user: req.user,
    });
});

// TODO: remove later
app.use(authenticate);
// combining all routes
app.use(routesCombinator(require('./routes')));

// 404 Not Found middleware
app.use(notFoundHandler);

// Global error handling middleware
app.use(errorHandler);

module.exports = app;
