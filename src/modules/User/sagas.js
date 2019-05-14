import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { userRequest, userRequestSuccess, userRequestFailure } from './actions';
import { getUserInfo } from './api';

function* fetchUserWatcher() {
  yield takeLatest(userRequest, userFlow); // Замените вопросительный знак на подходящий экшен
}

export function* userFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены user_SUCCESS / user_FAILURE

  try {
    const key = yield select(state => state.auth.apiKey);
    const response = yield call(getUserInfo, key, action.payload);
    yield put(userRequestSuccess(response)) 
  } catch (error) {
    yield put(userRequestFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}