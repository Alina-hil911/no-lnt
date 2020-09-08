import { SET_CURRENT_USER, GET_USERS_START, LOAD_MORE_USERS_START, LOAD_MORE_USERS_SUCCESS,  LOAD_MORE_USERS_FAILURE, GET_USERS_SUCCESS, GET_USERS_FAILURE, FIND_USERS, CHECK_USER, FIND_USERS_START} from './types';

export const getUsersStart = () => ({
    type: GET_USERS_START
});

export const getUsersFailure = (payload) => ({
    type: GET_USERS_FAILURE,
    payload
});

export const getUsersSuccess = payload => ({
    type: GET_USERS_SUCCESS,
    payload
});

export const checkUser = payload => ({
    type: CHECK_USER,
    payload
});

export const findUserStart = payload => ({
    type: FIND_USERS_START,
    payload
})
export const findUser = payload => ({
    type: FIND_USERS,
    payload
});

export const loadMoreUsersStart = () => ({
    type: LOAD_MORE_USERS_START
});

export const loadMoreUsersFailure = (payload) => ({
    type: LOAD_MORE_USERS_FAILURE
});

export const loadMoreUsersSuccess = (payload) => ({
    type: LOAD_MORE_USERS_SUCCESS,
    payload
});

export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload
});
