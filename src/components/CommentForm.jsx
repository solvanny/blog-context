import React, {Component} from 'react';
import {Consumer} from '../store/context';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const formStyles = {
  width: '80%',
}

const inputStyles = {
  width: "50%",
  float: "left",
  margin: "1em"
}

const textareaStyles = {
  width: "50%",
  float: "left",
  margin: " 1em ",
  clear: "left"

}
const buttonStyles = {
  width: "50%",
  float: "left",
  margin: "1em",
  clear: "left"

}

class CommentForm extends Component {
 
  valueCommentForm(ev) {
    ev.preventDefault();
    let commentForm = new FormData(ev.target);
    let text = commentForm.get('commentText');
    let name = commentForm.get('commentName');
    if(!text.trim() || !name.trim()) {
      return false;
    }
    this.props.actions.addComment({
      id: this.props.data.commentId,
      articleId: this.props.articleId,
      text: text,
      name: name,
      date: new Date()
    })
    ev.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.valueCommentForm.bind(this)} style={formStyles}>
        <Input name="commentName" placeholder="Your Name" type="text" style={inputStyles}/>
        <textarea name="commentText" type="text" style={textareaStyles} rows="6" cols="50" placeholder="Insert your comment" className="textarea" type="text"/> 
        <Button name="commentButton" style={buttonStyles} variant="raised" color="primary" type="submit" >Submit</Button>
      </form>
    );
  }
}

export default Consumer(CommentForm);