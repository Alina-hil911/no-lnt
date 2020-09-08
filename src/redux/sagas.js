import { takeEvery } from 'redux-saga/effects';
import { GET_USERS_START, LOAD_MORE_USERS_START, FIND_USERS_START } from './Users/types';
import { getUsersSagaWorker, loadMoreUsersSagaWorker, findUserSagaWorker } from './Users/saga';


export function* sagaWatcher() {
  yield takeEvery(GET_USERS_START, getUsersSagaWorker);
  yield takeEvery(LOAD_MORE_USERS_START, loadMoreUsersSagaWorker);
  yield takeEvery(FIND_USERS_START, findUserSagaWorker);
}
