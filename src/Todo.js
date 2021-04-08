import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

function Todo({todo}) {
  console.log("WE ARE IN THE TODO", todo)
  return (
      <div id={todo.id} className="Todo">
        <div><b>{todo.title}</b> <small>Priority: {todo.priority}</small></div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
