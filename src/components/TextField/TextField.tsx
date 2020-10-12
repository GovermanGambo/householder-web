import React from "react";
import './TextField.scss';

const TextField = ({type, name, placeholder, required, onChange}: any) => {
    return (
        <div className="text-field">
            <input className=""
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={onChange} >
            </input>
        </div>
    )
}

export default TextField;