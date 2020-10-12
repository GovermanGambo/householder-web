import React from "react";
import ExpenseMaster from "../ExpenseMaster/expenseMaster";
import './applicationMain.scss';

const ApplicationMain = () => {
    return (
        <div>
            <div className="main-container">
                <div className="sidebar">

                </div>
                <div className="page">
                    <ExpenseMaster />
                </div>
            </div>
        </div>
    )
}

export default ApplicationMain;