//'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const NewSnippet = require('./model/snippets');
const MongoClient = require('mongodb').MongoClient;
const app = express(); 
const router = express.Router(); 

let db;

const port = process.env.API_PORT || 3001; 

MongoClient.connect('mongodb://paul:reacted@ds239439.mlab.com:39439/reactedsnippets', (err, client) => {
  if(err) return console.log('could not connect to db')
  db = client.db('newsnippets')

})

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 
app.use('/api', router);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache'); 
  next();
})

// router.get('/', (req, res) => {
//   res.json({ message:'Server is working on React Snippets' })
// })

// router.route('/reactedsnippets')
//   .get((req,res) => {
//     NewSnippet.find((err, snippets) => {
//       if(err) res.send(err);
//       res.json(snippets)
//     })
//   })
//   .post((req, res) => {
//     let newEntry = new NewSnippet();
//     newEntry.author = req.body.author; 
//     newEntry.text = req.body.text;
//     newEntry.save((err) => {
//       if(err)
//       res.send(err)
//       res.json({message: 'showing up in PM test'})
//   })
// })

app.listen(2099, ()=> {
  console.log('API running on port 3001')
})