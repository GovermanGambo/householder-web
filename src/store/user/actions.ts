import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_LOADING, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LoginDetails, UserAction, RegisterDetails } from "./types";

export const registerUser = (registerDetails: RegisterDetails) => async (dispatch: any) => {
    try {
        dispatch({
            type: REGISTER_LOADING
        });

        const res = await axios.post(`https://localhost:5001/api/user`, registerDetails);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: REGISTER_FAILED,
            error: e
        })
    }
}

export const loginUser = (loginDetails: LoginDetails) => async (dispatch: any) => {
    try {
        dispatch({
            type: LOGIN_LOADING
        });

        const res = await axios.post(`https://localhost:5001/api/user/login`, loginDetails);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: LOGIN_FAILED,
            error: e
        })
    }
}