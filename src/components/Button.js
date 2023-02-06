import React from 'react';

const Button = ({ children, classNames }) => {

    return (
        <button className={`btn btn-primary text-white font-bold  bg-gradient-to-r from-secondary to-primary ${classNames}`}>{children ? children : 'Get Started'} </button>
    );
};

export default Button;