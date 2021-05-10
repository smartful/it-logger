import { combineReducers } from 'redux';
import LogReducer from './LogReducer';

export default combineReducers({
  log: LogReducer,
});