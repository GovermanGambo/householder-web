import React from "react";
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../store/expense/actions";
import { RootState } from "../store";

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenseList = useSelector((state: RootState) => state.expenses);
    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        dispatch(GetExpenses());
    }

    const showData = () => {
        console.log(expenseList);
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
            return <p>Error: {expenseList.error}</p>
        }

        return <p>No expenses</p>
    }

    return (
        <div>
            {showData()}
        </div>
    )
}

export default ExpenseList;