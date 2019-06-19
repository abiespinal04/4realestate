
const Sequelize = require('sequelize')
const db = require('../../config/dabase')

const Clients = db.define('Clients', {
    agent: {
        type: Sequelize.JSON
    }
})

module.exports = Clients