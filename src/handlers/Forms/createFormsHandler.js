const createNewForm = require('../../controllers/Forms/createNewForm');

const createFormsHandler = async (req, res) => {
  const { name } = req.body;

  try {
    const newForm = await createNewForm(name);

    res.status(200).json(newForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createFormsHandler;
