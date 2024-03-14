import React from "react";

const Button = ({ title, className, onClick }) => {
    return (
        <button
            className={`px-5 py-2 rounded-full bg-secondary border-2 border-secondary hover:bg-background text-background hover:text-primary font-bold duration-500 ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
