import React from 'react';

const InfoCard = ({ img, title, info, style }) => {
    return (
        <div className={`card lg:card-side rounded-xl  flex px-6 py-[32px] gap-5 ${style}`}>
            <div>
                <img className='max-w-sm m-auto' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-3'>{title}</h2>
                <p >{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;