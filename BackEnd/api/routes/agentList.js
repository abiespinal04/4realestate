const express = require('express');
const router = express.Router();
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

    const newCampus = req.body
    const campusID = newCampus.id
    const campusName = newCampus.campusName
    const studentCount = newCampus.studentCount
    const description = newCampus.description
    const imageURL = newCampus.imageURL

    // console.log("BACKENNNNNNNNND", newStudent)
    Campus.update(
        {
            campusName,
            studentCount,
            description,
            imageURL
        },

        { where: { id: campusID } }
    ).then((campus) => res.status(200).json(campus))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})


module.exports = router