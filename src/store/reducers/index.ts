import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  user: userReducer,
});

export default rootReducer;
