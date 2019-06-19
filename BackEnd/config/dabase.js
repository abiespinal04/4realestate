const Sequelize = require("sequelize");

module.exports = new Sequelize("postgres", "postgres", "123", {
  host: "localhost",
  dialect: "postgres"
});
