import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import { reducer as apiReducer } from "./components/reducers/index";
import { reducer as postReducer } from "./components/reducers/post";

const twoReducers = combineReducers({
    apiReducer: apiReducer,
    postReducer: postReducer
})
const store = createStore(twoReducers,applyMiddleware(thunk,logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));