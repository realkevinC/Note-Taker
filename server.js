const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use('/api', apiRoutes);
// app.use('/html', htmlRoutes);

app.get('/api/test', (req, res) => {
  res.status(200).json({ 'user': "Tim" })
})

app.get('/', (req, res) => {
  // we run any logic that is part of it
  
  // render the index VIEW
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


app.get('/about', (req, res) => {

});

app.post('/newUser', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });