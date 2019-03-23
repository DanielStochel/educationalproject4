import React from "react";
import { Button, Table } from "semantic-ui-react";

const Options = props => {
  if (props.todo && props.todo.editing) {
    return EditOptions(props);
  } else {
    return AddOptions(props);
  }
};

export const EditOptions = props => {
  return (
    <Table.Cell>
      <Button color="green" onClick={props.editTodo}>
        Edit
      </Button>
      <Button color="blue" onClick={props.cancelEdit}>
        Cancel
      </Button>
    </Table.Cell>
  );
};

export const AddOptions = props => {
  return (
    <Table.Cell>
      <Button color="green" onClick={props.createTodo}>
        Create
      </Button>
      <Button color="blue" onClick={props.resetTodo}>
        Reset
      </Button>
    </Table.Cell>
  );
};

export default Options;
