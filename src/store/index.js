import { applyMiddleware, createStore } from 'redux';
import  thunk from 'redux-thunk';
import root_reducer from '../reducers';

export default createStore(root_reducer, applyMiddleware(thunk));
