import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import Options from "./Options";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    if (this.props.todo) {
      this.state = {
        ...this.props.todo
      };
    } else {
      this.state = {
        ...this.emptyTodo()
      };
    }
  }

  emptyTodo = () => ({ title: "", description: "", created_by: "" });

  changeNewTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  changeNewDescription = event => {
    this.setState({
      description: event.target.value
    });
  };

  changeNewCreated = event => {
    this.setState({
      created_by: event.target.value
    });
  };

  createTodo = () => {
    this.resetTodo();
    this.props.createTodo(this.state);
  };

  editTodo = () => {
    this.props.editTodo(this.state);
  };

  resetTodo = () => {
    this.setState({ title: "", description: "", created_by: "" });
  };

  cancelEditing = () => {
    this.props.cancelEditing();
  };

  render() {
    return (
      <Table.Row>
        <Table.Cell>
          <Input
            placeholder="Title"
            value={this.state.title}
            onChange={this.changeNewTitle}
          />
        </Table.Cell>

        <Table.Cell>
          <Input
            placeholder="Description"
            value={this.state.description}
            onChange={this.changeNewDescription}
          />
        </Table.Cell>

        <Table.Cell>
          <Input
            placeholder="created_by"
            value={this.state.created_by}
            onChange={this.changeNewCreated}
          />
        </Table.Cell>

        <Options
          todo={this.props.todo}
          editTodo={this.editTodo}
          createTodo={this.createTodo}
          resetTodo={this.resetTodo}
          cancelEdit={this.cancelEditing}
        />
      </Table.Row>
    );
  }
}

export default EditTodo;
