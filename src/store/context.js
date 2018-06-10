import React from 'react';

export const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    data: {
      id: 1,
      commentId: 1,
      articles: [],
      comments: []
    },
    actions: {
      addArticle: article => {
        this.setData({
          id: this.data.id + 1,
          articles: [...this.data.articles, article]
        });
      },

      addComment: (comment) => {
        this.setData({
          commentId: this.data.commentId + 1,
          comments: [...this.data.comments, comment]
        });
      }
    }
  }

  get data() {
    return this.state.data;
  }

  get actions() {
    return this.state.actions;
  }

  setData = (data, cb) => {
    let newData = {...this.state.data, ...data}
    this.setState({data: newData}, cb);
  }

  

  render() {
    return (
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}


export const Consumer = (Component) => {
  return (props) => {
    return (
      <Context.Consumer>
        {context => <Component {...props} {...context} /> }
      </Context.Consumer>
    )
  }
}