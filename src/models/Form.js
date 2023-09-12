const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Form',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defatultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
