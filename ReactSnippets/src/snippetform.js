import React, {Component} from 'react';
import style from './style';

class SnippetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {author: '', text: ''};
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  }
  handleTextChange(e) {
    this.setState({text: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.author} said "${this.state.text}"`)
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if(!text || !author) {
      return;
    }
    this.props.onSnippetSubmit({author: author, text: text})
    this.setState({author: '', text: ''})
  }

  render() {
    return (
      <form style={style.SnippetForm} onSubmit = {this.handleSubmit}>
      <input type="text" placeholder="Your Name..." style={style.SnippetFormAuthor} value={this.state.author} onChange={this.handleAuthorChange} />
      <input type="text" placeholder="Say something..." style={style.SnippetFormText} value={this.state.text} onChange={this.handleTextChange}/>
      <input type="submit" style={style.SnippetFormPost} value="Post" />
      </form>
    )
  }
}

export default SnippetForm;