import { SET_CURRENT_USER, GET_USERS_START, LOAD_MORE_USERS_START, LOAD_MORE_USERS_SUCCESS, LOAD_MORE_USERS_FAILURE, GET_USERS_SUCCESS, FIND_USERS, FIND_USERS_START, GET_USERS_FAILURE, CHECK_USER } from './types';

const INITIAL_STATE = {
    users: [],
    isLoading: false,
    error: '',
    checkedUsers: [],
    currentUser: null,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

    
        case LOAD_MORE_USERS_START: 
            return {
                ...state,
                isLoading: true
            }
        case LOAD_MORE_USERS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOAD_MORE_USERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                
                 users: [...state.users, ...action.payload]
            }
        }
        case FIND_USERS_START: 
            return {
                ...state,
                isLoading: true
            }
        case FIND_USERS:
            let newAllUsers = state.users.filter(item => { return item.name.first.toLowerCase().includes(action.payload.toLowerCase()) || item.name.last.toLowerCase().includes(action.payload.toLowerCase()) });
            let newCheckedUsers = state.checkedUsers.filter(item => { return item.name.first.toLowerCase().includes(action.payload.toLowerCase()) || item.name.last.toLowerCase().includes(action.payload.toLowerCase()) });
            return {
                ...state,
                isLoading: false,
                users: newAllUsers,
                checkedUsers: newCheckedUsers
            }
        case CHECK_USER:
            let userToCheck = state.users.filter(item => item.id.value === action.payload.id)[0];
            userToCheck.checked = action.payload.date;
            return {
                ...state,
                checkedUsers: [...state.checkedUsers, userToCheck]
            }
        case GET_USERS_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                users: action.payload
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SET_CURRENT_USER: 
            return {
                ...state,
                currentUser : state.users.filter(item=>item.id.value === action.payload)[0],
            }

        default: return state
    }
}