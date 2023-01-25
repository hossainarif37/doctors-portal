import React from 'react';

const LoginCode = () => {
    return (
        <div className="hero min-h-screen">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="type" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <input type='submit' className="btn btn-accent">Login</input>
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

export default LoginCode;