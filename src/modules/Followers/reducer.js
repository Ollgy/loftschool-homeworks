import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchRequestSuccess, fetchRequestFailure } from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

const data = handleActions(
  {
    [fetchRequest]: () => [],
    [fetchRequestSuccess]: (_state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchRequestSuccess]: () => false,
    [fetchRequestFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchRequestFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  data,
  isLoading,
  error,
});
