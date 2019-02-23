import React, { Component } from "react";
import * as TodoActions from "../actions/todoActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import TodoTable from "../components/todoTable";

const mapState = state => ({
  todos: state.todos
});

const actions = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

class TodoContainer extends Component {
  createTodo = todo => {
    this.props.actions.CreateTodo(todo);
  };

  startEditing = id => {
    this.props.actions.StartEditing(id);
  };

  cancelEditing = id => {
    this.props.actions.CancelEditing(id);
  };

  editTodo = todo => {
    this.props.actions.UpdateTodo(todo);
  };

  completeTodo = todo => {
    this.props.actions.UpdateTodo({ ...todo, status: "done" });
  };

  deleteTodo = todo => {
    this.props.actions.DeleteTodo(todo);
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
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};

export default connect(
  mapState,
  actions
)(TodoContainer);
