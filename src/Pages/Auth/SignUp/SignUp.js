import { async } from 'postcss-js';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import auth from '../../../firebase.init';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors: formErrors }, reset } = useForm();
    const [currentUser] = useAuthState(auth);
    const navigate = useNavigate();
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
    );




    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (loading || updating || sending) {
        return <Loading />
    }
    if (error || verificationError) {
        console.log(error);
    }


    const handleLogin = async (data) => {
        console.log(formErrors);
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data.name });
        // const success = await sendEmailVerification();
        // if (success) {
        //     alert('Sent email');
        //     navigate('/email-verification')
        // }
        reset();
    }
    // if (user) {
    //     navigate('/')
    // }


    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    {/* form */}
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1 className='text-xl text-center mb-5'>Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            {/* name input */}
                            <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered" />
                        </div>
                        {formErrors.name && <p className='text-error pt-1'>{formErrors.name?.message}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* email input */}
                            <input type="email" {...register("email", { required: "Email address is required", pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} className="input input-bordered" />
                        </div>
                        {formErrors.email && <p className='text-error pt-1'>{formErrors.email?.message}</p>}
                        {formErrors.email?.type === "pattern" && <p className='text-error'>Enter a valid email!</p>}

                        <div className="form-control mb-7">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* password input */}
                            <input type="password" {...register("password", { required: "Password is required", pattern: /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/ })} className="input input-bordered" />
                            {formErrors.password && <p className='text-error pt-1 '>{formErrors.password?.message}</p>}
                            {formErrors.password?.type === 'pattern' && <p className='text-error'>Password must have 8 characters long with uppercase, lowercase, special character and number!</p>}
                            {
                                (error || updateError) && <p className='text-error mt-1'>{error.message}</p>
                            }
                        </div>
                        <div className="form-control my-3">
                            {/* signup button */}
                            <input type='submit' className="btn btn-accent" value='Sign Up' />
                        </div>

                        {/* Navigate login page */}
                        <p className='text-sm text-center'>Alread have an account? <Link to='/login' className='text-secondary hover:underline'>Login</Link></p>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;