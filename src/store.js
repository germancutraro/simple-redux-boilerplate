import { createStore } from 'redux';
import rootReducer from './reducers';

// Actions 
import { incrementAction } from './actions/increment-action';

const store = createStore(rootReducer);

store.subscribe(() => console.info(store.getState()));

store.dispatch(incrementAction()); 

export default store;
