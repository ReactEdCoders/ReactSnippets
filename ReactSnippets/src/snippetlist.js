import React, { Component } from 'react';
import Snippet from './snippet';
import style from './style';

class SnippetList extends Component {
  render() {
    let snippetNodes = this.props.data.map(snippet => {
      return (
        <Snippet author = {snippet.author} key = {snippet['_id']}>
        {snippet.text}
        </Snippet>
      )
    })
    return (
      <div style={style.SnippetList}>
      {snippetNodes}
      </div>
    )
  }
}

export default SnippetList;