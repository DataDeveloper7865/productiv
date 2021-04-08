import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos}) {

  console.log("WE ARE IN EDITABLE TODO LIST", todos)
  return (
      <div>
        {todos.map(todo1 => <EditableTodo key={todo1.id} todo={todo1} />)}
      </div>
  );
}

export default EditableTodoList;
