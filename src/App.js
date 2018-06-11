import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Container } from 'semantic-ui-react';

class App extends Component {
    constructor(){
      super();
      this.state = {
          todos: [
              { id: 1, text: 'Todo 1'},
              { id: 2, text: 'Todo 2'},
              { id: 3, text: 'Todo 3'}
          ]
      }
      this.addTodo = this.addTodo.bind(this);
  }
  render() {
    return (
      <Container text textAlign='center' style={ESTILOS.body} id="main-cont">
        <h1>To Do's ({this.state.todos.length})</h1>
        <div style={ESTILOS.line}></div>
        
        <TodoList data={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </Container>
    );
  }

  addTodo(todoText){
    let array = this.state.todos;
    array.push({
      id: Math.floor(Math.random() * 100),
      text: todoText
    });
    this.setState({todos: array});
  }
}

export default App;

const ESTILOS = {
  body: {
    backgroundColor: '#f5f5f5',
    margin: '0 auto',
    padding: 0,
    marginTop: 25,
    paddingTop: 25
  },
  line: {
    margin: '10px 0 0 0',
    borderBottom: '1px dotted red',
  }
};
