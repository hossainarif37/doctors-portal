import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../../components/Loading';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);

    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors: formErrors } } = useForm();

    const handleLogin = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }



    if (loading || googleLoading) {

        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true });

    }
    return (
        <div className="hero min-h-screen">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    {/* form */}
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1 className='text-xl text-center mb-5'>Login</h1>
                        <div className="form-control">
                            <label className="label">

                                <span className="label-text">Email</span>
                            </label>

                            {/* email input */}
                            <input type="email" {...register("email", { required: "Email address is required" })} className="input input-bordered" />
                            {formErrors?.email && <p className='text-error mt-1'>{formErrors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* password input */}
                            <input type="password" {...register("password", { required: 'Password is required', minLength: { value: 8, message: 'Error: Password must be at least 8 characters long. Please try again.' } })} className="input input-bordered" />
                            {formErrors?.password && <p className='text-error mt-1'>{formErrors.password.message}</p>}

                            <label className="label">
                                {/* forgot password */}
                                <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            {error && <p className='text-error'>{error.message}</p>}

                        </div>
                        <div className="form-control my-3">
                            {/* login button */}
                            <input type='submit' className="btn btn-accent" value='Login' />
                        </div>
                        {/* Navigate Sign Up page */}
                        <p className='text-sm text-center'>New to Doctors Portal? <Link to='/signup' className='text-secondary hover:underline'>Create new account</Link></p>
                        <div className="divider">OR</div>
                    </form>
                    {/* continue with google button */}
                    <div className="form-control">
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
