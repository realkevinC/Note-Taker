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
    res.status(200).json(db.notes);
});



router.post('/notes', (req, res) => {
    // we want to get information from the user
    console.log(req.body)

    // deconstrcut the request body object
    // let { title, text } = req.body; 

    // construct an temp object to put in the db
    const tempNote = {
        id: uuidv4(),
        title: req.body.title,
        text:req.body.text  
    }

    console.log(tempNote);
    // we need to request/query for the dataset (database)
    // console.log(db.notes);
    // console.log(typeof db.notes);
    //db.notes.push(tempNote);

    // we need to add the new data

    // we need to write the new data (JSON.stringify() )

    // response with the new data
    const newNote = createNote(tempNote, db.notes);
    res.status(201).json(newNote);
});

router.delete('/notes/:id' , (req, res) => {
    const params = req.params.id
    deleteNote(params, db.notes);
    res.redirect('/notes');
    });
module.exports = router;


