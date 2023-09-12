const { Router } = require('express');
const usersRouter = require('./usersRouter');
const formsRouter = require('./formsRouter');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/forms', formsRouter);

module.exports = apiRouter;
