import React, { Component } from "react";
import {
  CreateTodo,
  StartEditing,
  CancelEditing,
  UpdateTodo,
  DeleteTodo
} from "../actions/todoActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import TodoTable from "../components/todoTable";

class TodoContainer extends Component {
  createTodo = todo => {
    this.props.CreateTodo(todo);
  };

  startEditing = id => {
    this.props.StartEditing(id);
  };

  cancelEditing = id => {
    this.props.CancelEditing(id);
  };

  editTodo = todo => {
    this.props.UpdateTodo(todo);
  };

  completeTodo = todo => {
    this.props.UpdateTodo({ ...todo, status: "done" });
  };

  deleteTodo = todo => {
    this.props.DeleteTodo(todo);
  };

  render() {
    return (
      <div className="todo-container">
        <TodoTable
          todos={this.props.todos}
          createTodo={this.createTodo}
          startEditing={this.startEditing}
          cancelEditing={this.cancelEditing}
          editTodo={this.editTodo}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

TodoContainer.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapState = state => ({
  todos: state.todos
});

const actions = {
  CreateTodo,
  StartEditing,
  CancelEditing,
  UpdateTodo,
  DeleteTodo
};

export default connect(
  mapState,
  actions
)(TodoContainer);
