// filepath: d:\reactproject\frontend\src\components\Button.js
import React from "react";

const Button = ({ type, label, className, onClick }) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-md ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;