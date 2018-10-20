import React, {Component} from 'react';
import ErrorsContainer from './container/ErrorsContainer';
import TodoContainer from './container/TodoContainer';

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
