
import { createStore, combineReducers } from 'redux';
import tableReducer from './reducer';

const rootReducer = combineReducers({
  tables: tableReducer,
});

const store = createStore(rootReducer);

export default store;
