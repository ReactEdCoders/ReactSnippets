import React from 'react';
import ReactDOM from 'react-dom';
import SnippetBox from './snippetbox';




ReactDOM.render(
  <SnippetBox  
  url = 'http://localhost:3000/api/snippets'
  pollInterval = {2000} />, 
  document.getElementById('root')
);
