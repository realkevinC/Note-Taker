const router = require('express').Router();
const path = require("path");
const db = require('../../db/db.json');


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
    req.body;
    // construct an temp object to put in the db
    
    // we need to request/query for the dataset (database)

    // do we need to convert the data type? (JSON.parse())

    // we need to add the new data

    // we need to write the new data (JSON.stringify() )

    // response with the new data
    res.status(201).json();
});

module.exports = router;


