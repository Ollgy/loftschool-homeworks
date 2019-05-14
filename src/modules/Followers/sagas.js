import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchRequestSuccess, fetchRequestFailure } from './actions';
import { getFollowersInfo } from './api';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE

  try {
    const key = yield select(state => state.auth.apiKey);
    const response = yield call(getFollowersInfo, key, action.payload);
    yield put(fetchRequestSuccess(response)) 
  } catch (error) {
    yield put(fetchRequestFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
