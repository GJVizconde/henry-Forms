const { Sequelize } = require('sequelize');
require('dotenv').config();

const UserModel = require('./models/User');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryforms`,
  {
    logging: false,
    native: false,
    charset: 'utf8mb4',
  }
);

// const sequelize = new Sequelize(DB_DEPLOY,
// {
//   logging: false,
//   native: false,
//   charset: 'utf8mb4',
// }
// );

UserModel(sequelize);

const { User, Form } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
