import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from'./components/article/article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
        title="Title of article"
        subtitle="Subtitle for article"
        body="This is the article body"
        author="Bangajamba" 
        />
      </div>
    );
  }
}

export default App;
