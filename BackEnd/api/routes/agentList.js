const express = require('express');
const router = express.Router();
const sequelize = require('sequelize')
// const db = require('../../config/database')
const AgentList = require('../models/agentList')


router.get('/', (req, res, next) => {
    AgentList.findAll()
        .then(agentList => {
            console.log(agentList)
            res.status(200).json({ agentList })
        })
        .catch(err => console.log("error", err))
})

router.get('/:agent', (req, res, next) => {
        const agentEmail = req.params.agent
   
    AgentList.findAll({
        where: {
            agent: {email:agentEmail}
          }
      })
        .then(agent => {
            console.log(agent)
            res.status(200).json({ agent })
        })
        .catch(err => console.log("error", err))
})



router.post('/addAgent', (req, res, next) => {

    agent = req.body;

    AgentList.create({
        agent
        })
            .then(agents => {
                res.status(200).json(agents)
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({ message: 'Error at addAgent route' })
            })



})

router.post('/addClient', (req, res, next) => {

    agents = req.body;
    console.log("TEST", req.body.id)
    
  
    AgentList.update(  {
        agent : { firstName: req.body.agent.firstName,
        lastName: req.body.agent.lastName,
        email: req.body.agent.email,
        password: req.body.agent.password,
        address: req.body.agent.address,
        type: req.body.agent.type,
        clients: req.body.agent.clients,
        imageURL: req.body.agent.imageURL}
        },

    { where: { id:  req.body.id } })
            .then(agents => {
                res.status(200).json(agents)
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({ message: 'Error at addAgent route' })
            })



})


router.get('/:id', (req, res, next) => {

    res.status(200).json({ firstName: 'abimael', lastName: 'espinal' })


})


router.post('/student', (req, res, next) => {

    res.status(200).json({ message: 'Added student successfully', student: req.body })


})

router.delete('/:campusId', (req, res, next) => {
    const campusID = req.params.campusId
    Campus.destroy({
        where: {
            id: campusID
        }
    }).then(campusID => res.status(200).json(campusID))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})

router.patch('/editCampus', (req, res, next) => {

    const agent = req.body
    const agentID = agent.id
    const clients = agent.client

    // console.log("BACKENNNNNNNNND", newStudent)
    Campus.update(
        {
            clients
        },

        { where: { id: agentID } }
    ).then((campus) => res.status(200).json(campus))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})


module.exports = router