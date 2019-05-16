import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey

// const auth = (state = {}, action) => {
//   switch (action.type) {    
//     case "ADD_API_KEY":
//       console.log(action.payload);
//       return { ...state, 
//         key: action.payload, 
//         isAuthorized: action.payload === 'https://github.com/ on КП at 04-фев-2018 00:34' };
//     default:
//       return state;
//   }
// }

const apiKey = handleActions(
  {
    [addApiKey]: (state, action) => action.payload
  },
  ''
);

export default combineReducers({ apiKey });

export const getIsAuthorized = state => !!state.auth.apiKey;
export const  getApiKey = state => state.auth.apiKey;