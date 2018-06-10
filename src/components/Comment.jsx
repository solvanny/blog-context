import React, {Component} from 'react';
import {Consumer} from '../store/context';

const commentStyles = {
  width: "80%",
  float: "left",
  clear: "left",
  margin: "1em 1em"
}

class Comment extends Component {
  renderComment() {
    return (
      this.props.comments.map((comment) => 
      <React.Fragment key={comment.id} >
        <div style={commentStyles}>
          <b>User:</b> {comment.name}<br/>
          <b>Addet on: </b>
          {comment.date.getDate()}/
          {comment.date.getMonth()}/
          {comment.date.getFullYear()} 
          &nbsp; 
          {comment.date.getHours()}:
          {comment.date.getMinutes()}:
          {comment.date.getSeconds()}<br/>
          <br/>
          {comment.text}
        </div>
      </ React.Fragment>
      )
    );
  }
  render() {
    return (
      this.renderComment()
    );
  }
}

export default Consumer(Comment);