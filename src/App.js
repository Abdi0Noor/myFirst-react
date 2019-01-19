import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import TodoApp from './components/todo/todo-input';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoApp />
      </div>
    );
  }
}

export default App;
