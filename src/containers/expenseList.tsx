import React from "react";
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../store/expense/actions";
import { ExpenseState } from "../store/expense/types";

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenseList = useSelector((state: ExpenseState) => state);
    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        dispatch(GetExpenses());
    }

    const showData = () => {
        if (expenseList.loading) {
            return <p>Loading...</p>
        }

        if (!_.isEmpty(expenseList.data)) {
            return (
                <div className={"list-wrapper"}>
                    {expenseList.data?.map(el => {
                        return(
                            <div className={"pokemon-item"}>
                                <p>{el.amount}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }

        if (expenseList.error !== "") {
            return <p>{expenseList.error}</p>
        }

        return <p>Error</p>
    }

    return (
        <div>
            {showData()}
        </div>
    )
}

export default ExpenseList;