import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Practice</h1>
        </header>
       <Person />
       <Person />
       <Person />
      </div>
    );
  }
}

export default App;
