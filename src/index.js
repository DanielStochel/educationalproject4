import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from './store/configureStore'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
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
