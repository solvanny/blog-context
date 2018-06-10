import React, { Component } from 'react';
import './App.css';
import Article from './components/Article';
import ArticleForm from './components/ArticleForm';
import {Provider} from './store/context';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",

};

class App extends Component { 

  render() {
    return (
      <Provider>
          <div style={styles}>
            <ArticleForm  />
            <Article  />
          </div>
      </Provider>
    );
  }
}

export default App;
