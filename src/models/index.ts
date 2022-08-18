
import { Sequelize } from 'sequelize-typescript'
import Person from './person.model'
import constants from '../config/constants';
const {DB_CONFIGURATION} = constants
const sequelize = new Sequelize({
  database: DB_CONFIGURATION.database,
  dialect: 'postgres',
  username: DB_CONFIGURATION.username,
  password: DB_CONFIGURATION.password,
  models: [__dirname + '/models']
})

  sequelize
    .query(
      'ALTER TABLE "People" ADD COLUMN IF NOT EXISTS "updatedAt" Date'
    )
    .then(function (result) {
      console.log("Running Migration #1");
    })
    .catch(function (err) {
      console.log("An error occured while running migration:", err.message);
    });

sequelize.addModels([Person])