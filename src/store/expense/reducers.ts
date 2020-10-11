import { ExpenseState, ExpenseAction, GET_SUCCESS, GET_FAILED, GET_LOADING } from "./types";

const defaultState: ExpenseState = {
    data: null,
    loading: false,
    error: ""
}

const expenseReducer = (state = defaultState, action: ExpenseAction) => {
    switch (action.type) {
        case GET_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ""
            }
        case GET_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case GET_LOADING:
            return {
                ...state,
                loading: true,
                error: ""
            }
        default:
            return state;
    }
}

export default expenseReducer;