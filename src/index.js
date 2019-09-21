import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";

// DONT BOTHER THAT, PLANNED TO USE REDUX, THEN DECIDED TO PRACTICE WITH CONTEXT
// Also REDUX might overcomplicate things here.

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
// import reducers from './reducers';

// const store = createStore(reducers);

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
