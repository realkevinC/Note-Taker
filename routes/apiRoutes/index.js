const router = require('express').Router();
const path = require("path");
const db = require('../../db/db.json');
const {v4: uuidv4} = require('uuid');
const {createNote, deleteNote} = require("../../lib/notes");

// All of these routes are prefixed with '/api'
// '/api/notes'  --> GET Method
router.get('/notes', (req, res) => {
    console.log(db);
    // read the dataset
    res.status(200).json(db);
});



router.post('/notes', (req, res) => {
    // we want to get information from the user
    console.log(req.body)

    req.body.id= uuidv4();
    // construct an temp object to put in the db
    
    // we need to request/query for the dataset (database)

    // do we need to convert the data type? (JSON.parse())

    // we need to add the new data

    // we need to write the new data (JSON.stringify() )

    // response with the new data
    const newNote = createNote(req.body, notes);
    res.status(201).json(newNote);
});

router.delete('/notes/:id' , (req, res) => {
    const params = req.params.id
    deleteNote(params, notes);
    res.redirect('');
    });
module.exports = router;


