import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const handleLogin = data => {
        console.log(data);
        reset()
    }


    return (
        <div className="hero min-h-screen">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1 className='text-xl text-center mb-5'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <input type='submit' className="btn btn-accent" value='Login' />
                        </div>
                        <p className='text-sm text-center'>New to Doctors Portal? <Link className='text-secondary hover:underline'>Create new account</Link></p>
                        <div className="divider">OR</div>
                    </form>
                    {/* continue with google button */}
                    <div className="form-control">
                        <button className="btn btn-outline">Continue with google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;