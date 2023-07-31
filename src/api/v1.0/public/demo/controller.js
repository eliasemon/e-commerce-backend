const demoService = require('../../../../lib/demo');

const getDemoController = (req, res) => {
  res.status(200).send('Getting Demo Router');
};

const postDemoController = (req, res) => {
  if (!req.body.data) {
    return res.status(400).json({
      message: 'No Data Found',
      data: [],
    });
  }
  return res.status(201).json({
    message: 'Success',
    data: demoService(req.body.data),
  });
};
module.exports = {
  getDemoController,
  postDemoController,
};
