import { combineReducers } from 'redux';
import fetchReducer from './FetchReducer';

const rootReducer = combineReducers({
  fetchConfig: fetchReducer
});

export default rootReducer;
