import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form'
import TodoList from './components/TodoList';

class App extends Component {
  id = 2;
  state = {
    input: "",
    todos: [
      { id: 0, todo: "Studying Japanese", checked: false },
      { id: 1, todo: "Studying React", checked: true }
    ]
  };

  addTodo = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        todo: input,
        checked: false
      })
    });
  };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  onToggle = id => {
    const { todos } = this.state;
    const selectedTodo = todos.find(todo => todo.id === id);
    selectedTodo.checked = !selectedTodo.checked;
    todos.map(todo => (todo.id === selectedTodo.id ? selectedTodo : todo));
    this.setState({
      todos
    });
  };

  onRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };
  
  render() {
    const { input, todos } = this.state;
    const { addTodo, onChange, onKeyPress, onToggle, onRemove } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            input={input}
            addTodo={addTodo}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        }
      >
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;
