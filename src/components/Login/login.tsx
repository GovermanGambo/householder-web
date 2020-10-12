import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { loginUser } from "../../store/user/actions";
import { LoginDetails } from "../../store/user/types"
import TextField from "../TextField/TextField";
import './login.scss';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        email: "",
        password: ""
    });

    const loginState = useSelector((state: RootState) => state.user);

    const tryLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginDetails);
        dispatch(loginUser(loginDetails))
    }

    const showLoginState = () => {
        if (loginState.currentUser != null) {
            return (
                <div>
                    <p>You are now logged in!</p>
                </div>
            )
        }

        if (loginState.error !== "") {
            return (
                <p className="error">{loginState.error}</p>
            )
        }

        if (loginState.loading) {
            return (
                <p>Loading...</p>
            )
        }

        return null;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setLoginDetails({ ...loginDetails, [name]: value });
    }

    return (
        <div className="center">
            <div className="center-text">
                <h1>Householder</h1>
            </div>
            <div className="vertical-list card">
                <div className="center-text">
                    <h1>Clara Holsts Veg</h1>
                    <p className="secondary">Please log in</p>
                </div>
                <form onSubmit={tryLogin}>
                    <TextField
                        type="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                        onChange={handleChange} 
                    />
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange} 
                    />
                    <div className="center">
                        <div className="button-primary">
                            <button type="submit">Let's go!</button>
                        </div>
                    </div>
                    {showLoginState()}
                    <div className="center-text">
                        <p className="secondary">
                            Not yet registered?<br></br>
                            <a href="/">Register here!</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;