import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../store";
import { validateToken } from "../store/user/actions";

const PrivateRoute = ({component, ...rest }: any) => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.currentUser)
    React.useEffect(() => {
        validateUser();
    }, []);

    const validateUser = () => {
        dispatch(validateToken());
    }

    const isUserLoggedIn = () => {
        console.log(currentUser);
        return (currentUser !== null)
    }

    const routeComponent = (props: any) => (
        isUserLoggedIn()
                ? React.createElement(component, props)
                : <Redirect to={{ pathname: '/login'}} />
    );
    return <Route {...rest} render={routeComponent}/>;
}

export default PrivateRoute;