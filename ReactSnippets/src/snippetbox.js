import React, { Component } from 'react';
import SnippetList from './snippetlist';
import SnippetForm from './snippetform'; 
// import DATA from './data'; 
import style from './style'; 
import axios from 'axios';

class SnippetBox extends Component {
  constructor(props){
    super(props); 
    // console.log(props);
    this.state = {data: []}; 
    this.loadSnippetsFromServer = this.loadSnippetsFromServer.bind(this);
//this.handleSnippetSubmit = this.handleSnippetSubmit.bind(this);
  }

  loadSnippetsFromServer() {
   // console.log('checking for peops', props);
    axios.get(this.props.url)
    .then(res => {
      this.setState({data: res.data})
    })
  }

  componentDidMount() {
    this.loadSnippetsFromServer();
    setInterval(this.loadSnippetsFromServer, this.props.pollInterval);
  }


  render() {
    return(
      <div style={style.SnippetBox}>
      <h2>Snippets:</h2>
      <SnippetList data={this.state.data}/>
      <SnippetForm />
      </div>
    )
  }
}

export default SnippetBox;