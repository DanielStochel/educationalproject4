import React, {Component} from 'react';
import ErrorsContainer from './containers/ErrorsContainer';
import TodoContainer from './containers/TodoContainer';

class TodoApp extends Component {
  render(){
    return(
      <div>
        <ErrorsContainer />
        <TodoContainer />
      </div>
    )
  }
}

export default TodoApp;
