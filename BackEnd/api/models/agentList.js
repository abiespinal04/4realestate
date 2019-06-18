
const Sequelize = require('sequelize')
const db = require('../../config/dabase')

const AgentList = db.define('AgentLists', {
    agent: {
        type: Sequelize.JSON
    }
})

module.exports = AgentList