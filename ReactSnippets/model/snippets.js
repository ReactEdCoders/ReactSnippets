'use strict'

const mongoose =require('mongoose'); 
const Schema = mongoose.Schema; 

let SnippetSchema =  new Schema ({
  author: String, 
  text: String 
})

module.exports = mongoose.model('NewSnippet', SnippetSchema); 