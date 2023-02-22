"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const birds_1 = require("./birds");
const dbName = 'petDB';
const username = 'sqluser';
const password = 'Password1!';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, birds_1.BirdFactory)(sequelize);
exports.db = sequelize;
