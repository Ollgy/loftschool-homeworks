import { searchRequest, searchSuccess, searchFailure } from '../actions/actions';

const initialState = {
  series: [],
  isLoading: false,
  error: false
}

const search = (state = initialState, action) => {
  switch(action.type) {
    case searchRequest.toString():
      return {
        ...state,
        series: [],
        isLoading: true,
      };

    case searchSuccess.toString():
      return {
        ...state,
        series: action.payload,
        isLoading: false,
      };

    case searchFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default search;
