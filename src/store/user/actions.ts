import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_LOADING, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LoginDetails, RegisterDetails, VALIDATION_FAILED, VALIDATION_SUCCESS } from "./types";

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
            error: e.response.data.message
        })
    }
}

export const loginUser = (loginDetails: LoginDetails) => async (dispatch: any) => {
    try {
        dispatch({
            type: LOGIN_LOADING
        });

        const res = await axios.post(`https://localhost:5001/api/users/login`, loginDetails);

        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.token
        })
    } catch (e) {
        dispatch({
            type: LOGIN_FAILED,
            error: e.response.data.message
        })
    }
}

export const validateToken = () => async (dispatch: any) => {
    try {
        const token = localStorage.getItem('token');
        console.log(token);
        const res = await axios.post(`https://localhost:5001/api/users/validate`, {}, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })

        console.log("VALIDATION SUCCESS");
        dispatch({
            type: VALIDATION_SUCCESS
        })
    } catch (e) {
        console.log("VALIDATION FAILED");
        dispatch({
            type: VALIDATION_FAILED
        })
    }
}