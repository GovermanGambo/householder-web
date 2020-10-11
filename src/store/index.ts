import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import expenseReducer from "./expense/reducers";
import { ExpenseState } from "./expense/types";
import userReducer from "./user/reducers";
import { UserState } from "./user/types";

const rootReducer = combineReducers({
    user: userReducer,
    expenses: expenseReducer
});

export type RootState = {
    user: UserState;
    expenses: ExpenseState;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;