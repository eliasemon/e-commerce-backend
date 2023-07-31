const combinedRouter = require('express').Router();

const routesCombinator = (routes) => {
  routes.forEach((route) => {
    combinedRouter.use(route);
  });
  return combinedRouter;
};

module.exports = routesCombinator;
