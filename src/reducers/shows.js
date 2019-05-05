import { showRequest, showSuccess, showFailure } from '../actions/actions';

const initialState = {
  data: {},
  isLoading: false,
  error: false
}

const shows = (state = initialState, action) => {
  switch(action.type) {
    case showRequest.toString():
      return {
        ...state,
        data: {},
        isLoading: true,
      };

    case showSuccess.toString():
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case showFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default shows;