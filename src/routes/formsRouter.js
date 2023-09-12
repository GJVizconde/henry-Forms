const { Router } = require('express');
const createFormsHandler = require('../handlers/Forms/createFormsHandler');

const formsRouter = Router();

formsRouter.post('/', createFormsHandler);
// formsRouter.get('/', getFormsHandler);
// formsRouter.put('/:id', updateFormHandler);
// formsRouter.delete('/:id', deleteFormHandler);

module.exports = formsRouter;
