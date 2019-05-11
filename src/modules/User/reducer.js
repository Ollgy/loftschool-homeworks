import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { userRequest, userRequestSuccess, userRequestFailure } from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

const data = handleActions(
  {
    [userRequest]: () => {},
    [userRequestSuccess]: (_state, action) => action.payload,
  },
  {},
);

const isLoading = handleActions(
  {
    [userRequest]: () => true,
    [userRequestSuccess]: () => false,
    [userRequestFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [userRequest]: () => null,
    [userRequestFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  data,
  isLoading,
  error,
});

