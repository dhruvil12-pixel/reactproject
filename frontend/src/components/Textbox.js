// filepath: d:\reactproject\frontend\src\components\Textbox.js
import React from "react";

const Textbox = ({ label, type, name, placeholder, register, error, className }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                {...register}
                className={`border rounded-md p-2 ${className}`}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default Textbox;