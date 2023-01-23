import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import Button from '../../../components/Button';

const Banner = () => {
    return (
        <div className="hero py-5 lg:py-0 lg:min-h-screen lg:px-14" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl mb-10 lg:mb-0" alt='' />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default Banner;