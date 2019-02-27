import React from "react";
import { Button, Table, Label } from "semantic-ui-react";

const TodoRow = props => {
  const { todo, completeTodo, startEditing, deleteTodo } = props;
  return (
    <Table.Row className={getClassName(props)}>
      <Table.Cell>
        {props.todo.status === "done" && (
          <Label ribbon color="green">
            Completed
          </Label>
        )}
        {todo.title}
      </Table.Cell>
      <Table.Cell>{todo.description}</Table.Cell>
      <Table.Cell>{todo.created_by}</Table.Cell>
      <Table.Cell className="options">
        {props.todo.status !== "done" && (
          <Button
            className="option-buttons"
            color="green"
            onClick={completeTodo}
          >
            <i className="fa fa-check" />
          </Button>
        )}
        <Button className="option-buttons" color="blue" onClick={startEditing}>
          <i className="fa fa-pencil" />
        </Button>
        <Button className="option-buttons" color="red" onClick={deleteTodo}>
          <i className="fa fa-trash" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

const getClassName = props => {
  return `
    ${props.todo.updating ? "updating" : ""}
    ${props.todo.status === "done" ? "done" : ""}
    ${props.todo.deleting ? "deleting" : ""}
  `;
};

export default TodoRow;
