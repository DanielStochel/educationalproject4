import React from "react";
import { Table } from "semantic-ui-react";
import TodoRow from "./todoRow";
import EditTodo from "./editTodo";

const TodoTable = ({
  editTodo,
  cancelEditing,
  completeTodo,
  startEditing,
  deleteTodo,
  createTodo,
  todos
}) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Created_by</Table.HeaderCell>
          <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {todos.map(t => {
          if (t.editing) {
            return (
              <EditTodo
                editTodo={editTodo}
                cancelEditing={() => cancelEditing(t.id)}
                key={t.id}
                todo={t}
              />
            );
          } else {
            return (
              <TodoRow
                todo={t}
                key={t.id}
                completeTodo={() => completeTodo(t)}
                startEditing={() => startEditing(t.id)}
                deleteTodo={() => deleteTodo(t)}
              />
            );
          }
        })}

        <EditTodo createTodo={createTodo} />
      </Table.Body>
    </Table>
  );
};

export default TodoTable;
