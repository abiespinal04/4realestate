
const Sequelize = require('sequelize')
const db = require('../../config/dabase')

const Clients = db.define('client', {
    firstName: {
        type: Sequelize.STRING,
       
    },
    lastName: {
        type: Sequelize.INTEGER
    },
    address: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }

})

module.exports = Clients