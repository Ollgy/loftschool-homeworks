//import { combineReducers } from 'redux';
//import { handleActions } from 'redux-actions';
import {} from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey

const auth = (state = {}, action) => {
  switch (action.type) {
    case "ADD_API_KEY":
      return { ...state, 
        key: action.payload, 
        isAuthorized: action.payload === 'https://github.com/ on КП at 04-фев-2018 00:34' };
    default:
      return state;
  }
}

export default auth;

export const getIsAuthorized = state => state.auth.isAuthorized;
export const  getApiKey = state => state.key;