const userRoutes = require('./user.routes');

const ApiRoutes = (app) => {
app.use(userRoutes);
};

module.exports = ApiRoutes;