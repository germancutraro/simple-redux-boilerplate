import { combineReducers } from 'redux';
import { countReducer } from './count-reducer';

const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;