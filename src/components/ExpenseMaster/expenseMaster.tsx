import React from "react";
import './expenseMaster.scss';

const ExpenseMaster = () => {
    return (
        <div>
            <div className="top-menu">
                <a className="tab-element-active">
                    <div className="center-text">
                        <p className="secondary">EXPENSES</p>
                    </div>
                </a>
                <a className="tab-element">
                    <div className="center-text">
                        <p className="secondary">MY SETTLEMENTS</p>
                    </div>
                </a>
                <a className="tab-element">
                    <div className="center-text">
                        <p className="secondary">RECONCILIATIONS</p>
                    </div>
                </a>
            </div>
            <div className="content">
                <div className="button-primary">
                    <button type="button">Add Expense</button>
                </div>
                <div className="simple-table">
                    <table>
                        <tr>
                            <th>DATE</th>
                            <th>PAYEE</th>
                            <th>NOTE</th>
                            <th>AMOUNT</th>
                            <th>STATUS</th>
                        </tr>
                        <tr>
                            <td>12.09.2020</td>
                            <td>Eirik</td>
                            <td>Dopapir!</td>
                            <td>40000.00 kr</td>
                            <td>Unresolved</td>
                        </tr>
                        <tr>
                            <td>09.09.2020</td>
                            <td>Amanda</td>
                            <td>La ut for middag</td>
                            <td>200.00 kr</td>
                            <td>Unresolved</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseMaster;