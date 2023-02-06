import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import auth from '../../../firebase.init';

const EmailVerification = () => {
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }

    console.log(user);
    const handleReload = () => {
        window.location.reload();
    }

    if (user?.emailVerified) {
        navigate('/')
    }
    else {
        alert('Please verify your email address!')
    }


    return (
        <div>
            <h1 className="text-4xl">"Please confirm your email address"</h1>
            <h2 className="text-xl">We've sent a verification email to <span className='font-semibold text-error'>"{user.email}"</span>. Click the link in that email to complete your registration.</h2>
            <p>If you don't see the email in your inbox, please check your spam folder. If it's not there, click the button below to request another verification email.</p>
            <button onClick={handleReload} className='btn btn-primary text-white font-bold  bg-gradient-to-r from-secondary to-primary'>Back to Home page</button>
        </div>
    );
};

export default EmailVerification;