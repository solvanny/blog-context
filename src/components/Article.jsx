import React, {Component} from 'react';
import {Consumer} from '../store/context';
import CommentForm from './CommentForm';
import Comment from './Comment';

const articleStyles = {
  width: "80%",
  float: "left",
  clear: "left",
  marginLeft: "1em"
 
}

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false
    }
  }

  onCommentClick(ev) {
    ev.preventDefault();
    this.setState({isFormOpen: !this.state.isFormOpen})
  }

  renderComments(articleId) {
    let comments = this.props.data.comments.filter((comment) => { return comment.articleId === articleId});
    if(comments.length) {
      return ( 
        <ul>
          <Comment comments={comments}/>
        </ul>
      );
    }
    return this.state.isFormOpen ? <CommentForm  articleId={articleId}/> : '' 
  }

  renderArticle() {
    return (
        this.props.data.articles.map((article) => 
        <React.Fragment key={article.id} >
          <div  style={articleStyles}>
            <p>
              <b>Title:</b> {article.title}<br/> 
              <b>From:</b> {article.date.getDate()}/
              {article.date.getMonth()}/
              {article.date.getFullYear()} 
              &nbsp; 
              {article.date.getHours()}:
              {article.date.getMinutes()}:
              {article.date.getSeconds()}
            </p> 
            <div>
              {article.text.map((text, id) => 
                <p key={id}>
                  {text}
                </p>
              )}
            </div>
            <a href="#" onClick={this.onCommentClick.bind(this)}>Leave your comment:</a>
              {this.renderComments(article.id)}  
          </div>
          </React.Fragment>
      ));  
  }
  render() {
    return (
      <ul>
       {this.renderArticle()}
      </ul>
    );
  }
}

export default Consumer(Article);