
import { ADD_TABLE } from './actions';

const initialState = {
  tables: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TABLE:
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
