import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render(){
    const { todos, onRemove, onToggle } = this.props;
    const todoList = todos.map(({ id, todo, checked }) => (
      <TodoItem
        id={id}
        todo={todo}
        checked={checked}
        onRemove={onRemove}
        onToggle={onToggle}
        key={id}
      />
    ));
    return <div className="todo-list">{todoList}</div>;
  }
}
export default TodoList;