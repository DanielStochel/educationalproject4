import React from 'react';
import { configureStore } from './store/configureStore'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as TodoActions from './actions/todoActions'

const store = configureStore()

store.dispatch(TodoActions.GetTodos())


ReactDOM.render(
  <Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
