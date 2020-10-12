export const REGISTER_SUCCESS = "users/REGISTER_SUCCESS";
export const REGISTER_FAILED = "users/REGISTER_FAILED";
export const REGISTER_LOADING = "users/REGISTER_LOADING";

export const LOGIN_SUCCESS = "users/LOGIN_SUCCESS";
export const LOGIN_FAILED = "users/LOGIN_FAILED";
export const LOGIN_LOADING = "users/LOGIN_LOADING";

export const VALIDATION_SUCCESS = "users/VALIDATION_SUCCESS";
export const VALIDATION_FAILED = "users/VALIDATION_FAILED";

export interface UserAction {
    type: string,
    payload: string,
    error: string
}

export type RegisterDetails = {
    firstName: string;
    lastName: string;
    email: string;
    registerData: string;
    password: string;
    confirmPassword: string;
}

export type LoginDetails = {
    email: string;
    password: string;
}

export type User = {
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    registerDate: string;
}

export type UserState = {
    currentUser: string | null;
    loading: boolean;
    error: string;
}