import { async } from 'postcss-js';
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import auth from '../../../firebase.init';

const PasswordReset = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleResetPassword = async () => {
        const success = await sendPasswordResetEmail(
            email
        );
        console.log(success);
        if (error) {
            alert(error)
        }

        if (success) {
            alert('Sent email');
            navigate('/login')
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <h2 className="card-title">Forgot Your Password?</h2>
                <p>Enter your registered email to receive a password reset link.</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="input input-bordered w-full " />
                <div onClick={handleResetPassword} className="card-actions justify-center">
                    <Button className="btn btn-primary capitalize">Get Reset Link</Button>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;