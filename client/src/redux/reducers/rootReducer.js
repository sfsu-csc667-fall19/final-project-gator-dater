import { combineReducers } from 'redux';
import userReducer from './userReducer';
import pageReducer from './pageReducer';
import updateReducer from './updateReducer';

export default combineReducers({
  userReducer, pageReducer, updateReducer
});