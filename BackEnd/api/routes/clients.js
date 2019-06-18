const express = require('express');
const router = express.Router();
// const db = require('../../config/database')
const Client = require('../models/clients')


router.get('/', (req, res, next) => {
    Client.findAll()
        .then(client => {
            console.log(client)
            res.status(200).json({ client })
        })
        .catch(err => console.log("error", err))
})


router.post('/addClient', (req, res, next) => {

    campusName = req.body.campusName;
    studentCount = req.body.studentCount,
    description = req.body.description,
    imageURL = req.body.imageURL

        Campus.create({
            campusName,
            studentCount,
            description,
            imageURL
        })
            .then(campus => {
                res.status(200).json(campus)
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({ message: 'Error at addStudent route' })
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