const authenticate = (req, res, next) => {
    req.user = {
        id: '64c935462125de32cc714313',
        name: 'MR Wang',
        email: 'mrwang@gmail.com',
        role: 'user',
    };
    next();
};

module.exports = authenticate;
