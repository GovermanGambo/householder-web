import axios from "axios";
import { GET_SUCCESS, GET_FAILED, GET_LOADING } from "./types";

export const GetExpenses = () => async (dispatch: any) => {
    try {
        dispatch({
            type: GET_LOADING
        });

        const res = await axios.get(`https://localhost:5001/api/expense`);

        dispatch({
            type: GET_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: GET_FAILED,
            error: e
        })
    }
}