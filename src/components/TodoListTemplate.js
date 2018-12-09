import React from "react";
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className='todo-list-template'>
      <div className='title'>Today's Todos</div>
      <section className='form-wrapper'>{form}</section>
      <section className='list-wrapper'>{children}</section>
    </main>
  );
};

export default TodoListTemplate;
