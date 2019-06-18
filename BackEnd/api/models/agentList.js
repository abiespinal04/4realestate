
const Sequelize = require('sequelize')
const db = require('../../config/dabase')

const AgentList = db.define('agentList', {
    agents: {
        type: Sequelize.ARRAY
       
    }
})

module.exports = Clients