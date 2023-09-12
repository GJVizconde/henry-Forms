const { Form } = require('../../db');

const createNewForm = async (name) => {
  try {
    const newForm = await Form.create({
      name,
    });

    return newForm;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = createNewForm;
