import React from 'react';

const TestimonialCard = ({ info }) => {
    const { img, name, location, desc } = info;
    return (
        <div className='rounded-xl shadow-xl px-6 py-8'>
            <p className='pb-9'>{desc}</p>
            <div className=' flex gap-5 items-center'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-[#3A4256]'>{name}</h2>
                    <h3>{location}</h3>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;