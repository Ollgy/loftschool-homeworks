import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchUserFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены user_SUCCESS / user_FAILURE

  try {
    const key = yield select(getApiKey);
    const response = yield call(getUserInfo, key, action.payload);
    yield put(fetchSuccess(response)) 
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}