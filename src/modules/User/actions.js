import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены

export const userRequest = createAction('USER_REQUEST');
export const userRequestSuccess = createAction('USER_SUCCESS');
export const userRequestFailure = createAction('USER_FAILURE');