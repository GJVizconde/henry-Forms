const { Router } = require('express');
const apiRouter = require('./apiRouter');

const mainRouter = Router();

mainRouter.use('/api', apiRouter);

module.exports = mainRouter;
