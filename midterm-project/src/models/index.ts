import { Sequelize } from "sequelize";
import { BirdFactory } from "./birds";


// This has been updated to overcome an issue...
const dbName = 'petDB';
const username = 'sqluser';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

BirdFactory(sequelize);

export const db = sequelize;