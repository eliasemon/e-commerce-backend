const router = require('express').Router();
const {
  getDemoController,
  postDemoController,
} = require('../api/v1.0/public/demo');

// demo routes
router.route('/api/v1/demo').get(getDemoController).post(postDemoController);

module.exports = router;
