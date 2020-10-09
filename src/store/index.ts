import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import expenseReducer from "./expense/reducers";
import userReducer from "./user/reducers";

const rootReducer = combineReducers({
    user: userReducer,
    expenses: expenseReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;