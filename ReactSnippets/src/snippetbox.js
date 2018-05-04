import React, { Component } from 'react';
import SnippetList from './snippetlist';
import SnippetForm from './snippetform'; 
import style from './style'; 
import axios from 'axios';

class SnippetBox extends Component {
  constructor(props){
    super(props); 
    console.log('props', props);
    this.state = {data: []}; 
    this.loadSnippetsFromServer = this.loadSnippetsFromServer.bind(this);
    this.handleSnippetSubmit = this.handleSnippetSubmit.bind(this);
    this.url = props.url
  }

  loadSnippetsFromServer() {
  console.log(this.url)
    axios.get(this.url)    
    .then(res => {
      this.setState({data: res.data})
    })
  }

  handleSnippetSubmit(snippet) {
    let snippets = this.state.data;
    snippet.id = Date.now();
    let newSnippets = snippets.concat([snippet]);
    this.setState({data: newSnippets});
    axios.post(this.props.url, snippet)
      .then(res => {
        this.setState({data: res})
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.loadSnippetsFromServer();
    //setInterval(this.loadSnippetsFromServer, this.props.pollInterval);
  }

  render() {
    return(
      <div style={style.SnippetBox}>
      <h2>Snippets:</h2>
      <SnippetList data={this.state.data}/>
      <SnippetForm onSnippetSubmit = {this.handleSnippetSubmit} />
      </div>
    )
  }
}

export default SnippetBox;