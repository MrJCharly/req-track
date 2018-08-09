import { combineReducers } from 'redux';
import project from './project';
import main from './main';

const reducers = {
  project,
  main
}

export default combineReducers(reducers);
