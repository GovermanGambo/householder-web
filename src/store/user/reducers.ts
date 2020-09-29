import { UserAction, UserState, REGISTER_SUCCESS, REGISTER_LOADING, REGISTER_FAILED, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from "./types";

const initialState : UserState = {
    currentUser: null,
    loading: false,
    error: ""
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: ""
            }
        case REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                currentUser: null,
                error: action.error
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: ""
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: ""
            }
    }
}

export default userReducer;