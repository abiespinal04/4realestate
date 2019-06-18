const express = require('express');
const router = express.Router();
// const db = require('../../config/database')
const Clients = require('../models/clients')


router.get('/', (req, res, next) => {
    Clients.findAll()
        .then(client => {
            console.log(client)
            res.status(200).json({ client })
        })
        .catch(err => console.log("error", err))
})

router.get('/:client', (req, res, next) => {
        const clientEmail = req.params.client
   
        Clients.findAll({
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



router.post('/addClient', (req, res, next) => {

    agent = req.body;

    Clients.create({
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