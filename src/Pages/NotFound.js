import React from 'react';
import { Button } from 'react-day-picker';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    
    
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className="text-5xl font-bold text-accent">Not found page!</h1>
            <div className='mt-10'><button onClick={() => navigate('/')} className="btn btn-primary text-white font-bold  bg-gradient-to-r from-secondary to-primary ">Back to home page</button></div>
        </div>
    );
};

export default NotFound;