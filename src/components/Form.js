import React from "react";
import "./Form.css";

const Form = ({ input, addTodo, onChange, onKeyPress }) => {
  return (
    <div className="form">
      <input value={input} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="add-button" onClick={addTodo}>
        add
      </div>
    </div>
  );
};

export default Form;
