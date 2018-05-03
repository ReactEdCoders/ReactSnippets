import React, {Component} from 'react';
import style from './style';
import marked from '../node_modules/marked'
//updated file path for this project---> if erros persist try deleting


class Snippet extends Component {
  rawMarkup () {
    let rawMarkup = marked(this.props.children.toString());
    return {__html: rawMarkup}
  }
  render() {
    return(
      <div style={style.snippet}>
      <h3>{this.props.author}</h3>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

export default Snippet;