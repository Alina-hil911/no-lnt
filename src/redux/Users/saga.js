import { put, call } from 'redux-saga/effects';
import {getUsersSuccess, getUsersFailure, loadMoreUsersFailure, loadMoreUsersSuccess, findUser} from './actions';
import {getUsers} from '../services/users';

export function* getUsersSagaWorker(action) {
    try {
        const data = yield call(getUsers);
        yield put(getUsersSuccess(data))
    }
    catch(e) {
        yield put(getUsersFailure(e.message))
    }
};

export function* loadMoreUsersSagaWorker(action) {
    try {
        const data = yield call(getUsers);
        yield put(loadMoreUsersSuccess(data))
    }
    catch(e) {
        yield put(loadMoreUsersFailure(e.message))
    }
};



//Mock delay function
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
export function* findUserSagaWorker(action) {
    console.log('action payload from saga', action.payload)
    try {
        yield delay(250);
        yield put(findUser(action.payload))

    }
    catch(e) {
        console.log(e)

    }
}
