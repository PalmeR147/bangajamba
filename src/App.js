import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/article/article';

class App extends Component {
  constructor (props) {
    super(props);
    const a = 'a';
  }
  render () {
    return (
      <div className="App">
        <Article
          hgroup={{
            h1: <h1>Huvudtitel</h1>,
            h2: <h2>Subtitel</h2>,
          }}
          body="LiteBodyText"
          author={{ FirstName: 'Marcus', LastName: 'Palmér' }}
        />
      </div>
    );
  }
}

export default App;
