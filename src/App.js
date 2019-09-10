import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';

class app extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Jet', age: 52 },
      { name: 'Ann', age: 39 }
      ],
      otherState: 'some other state'
  }

  resetState = () => {
      this.setState({
        persons: [
          { name: 'You', age: 28 },
          { name: 'Me', age: 52 },
          { name: 'They', age: 39 }
          ],
          otherState: 'some other state'
      })
    }
    
  switchNameHandler = (newName) => {
      console.log("was clicked!");
      this.setState({
        persons: [
          { name: newName, age: 28 },
          { name: 'Jet', age: 52 },
          { name: 'Ann', age: 327 }
          ],
          otherState: 'some other state'
       })
    }

    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
          { name: event.target.value, age: 28 },
          { name: event.target.value, age: 52 },
          { name: 'Ann', age: 327 }
          ]
      })
    }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Practice</h1>
        </header>
        <button onClick={() => this.switchNameHandler('switchNameHandler!!!')}>Switch Name</button>
        <button onClick={this.switchNameHandler.bind(this, 'Max with bind')}>Switch with Bind</button>
        <button onClick={this.resetState}>Reset</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}
       changed={this.nameChangedHandler} />
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} 
       click={this.switchNameHandler.bind(this, 'MAX!')}
       changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
    );
    }
}

export default app;


