import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: '1st',
        completed: false
      },
      {
        id: 2,
        title: '2st',
        completed: false
      },
      {
        id: 3,
        title: '3st',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
    
      </div>
    );
  }
}

export default App;
