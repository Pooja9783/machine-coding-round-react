import "./styles.css";
import React, { useState } from "react";

const Todo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = () => {
    const todo = { id: Date.now(), todo: inputTodo };
    let res = [...todoList, todo];
    setTodoList(res);
    setInputTodo("");
    setIsEditing(false);
  };

  const handleEdit = (todoId) => {
    const todo = todoList.find((e) => e.id === todoId);
    setIsEditing(true);
    setInputTodo(todo.todo);
    setTodoList(todoList.filter((e) => e.id !== todoId));
  };

  const handleDelete = (todoId) => {
    const deleteTodo = todoList.filter((e) => e.id !== todoId);
    setTodoList(deleteTodo);
  };

  return (
    <div className="todo-container">
      <div className="todo-content">
        <h1>Todo</h1>
        <input name="todo" placeholder="Add Todo..." value={inputTodo} onChange={handleChange} />
        <button onClick={handleSubmit}>
          {isEditing ? "Update Todo" : "Add Button"}
        </button>
        <div>
          <ul className="todo-ui">
            {todoList.map((e, i) => {
              return (
                <div key={i} className="todo-list">
                  <li> {e.todo}</li>
                  <div>
                  <button onClick={() => handleEdit(e.id)}><i class="material-icons">edit</i>
                  </button>
                  <button onClick={() => handleDelete(e.id)}><i class="material-icons">delete</i>

                  </button>
                  </div>

                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
