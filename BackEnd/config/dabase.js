const Sequelize = require("sequelize");

module.exports = new Sequelize("4realestate", "postgres", "123", {
  host: "localhost",
  dialect: "postgres"
});
