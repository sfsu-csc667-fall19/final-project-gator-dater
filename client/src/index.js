import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'; 
import rootReducer from './redux/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';  
import { setActiveUsers } from './redux/actions/userActions';

const store = createStore(rootReducer, applyMiddleware(thunk)); // MUST APPLY THUNK MIDDLEWARE!!
const ws = new WebSocket('ws://localhost:4000');

ws.onclose = () => {
  console.log('connection has closed!');
};

ws.onopen = () => {
  console.log('connection has opened!');
};

ws.onmessage = (message) => {
  const messageObject = JSON.parse(message.data);
  switch (messageObject.type) {
    case 'UPDATE_USER_COUNT':
      store.dispatch(setActiveUsers(messageObject.count));
      break;
  }
  console.log(message.data);
};

ws.onerror = (e) => {
  console.log(e);
};

window.ws = ws; // temporary for demonstration, used to access globally, 9 times out of 10 don't do this, instance of websocket in client


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
