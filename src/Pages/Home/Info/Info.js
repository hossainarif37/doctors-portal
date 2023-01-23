import React from 'react';
import InfoCard from './InfoCard'
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/marker.svg'


const Info = () => {
    const testimonialInfo = [
        {
            img: clock,
            title: 'Opening Hours',
            info: 'Open 9.00 am to 5.00 pm everyday',
            style: 'text-white bg-gradient-to-r from-secondary to-primary'
        },
        {
            img: location,
            title: 'Visit our location',
            info: 'Brooklyn, NY 10036, United States',
            style: 'text-white bg-accent'
        },
        {
            img: phone,
            title: 'Contact us now',
            info: '+000 123 456789',
            style: 'text-white bg-gradient-to-r from-secondary to-primary'
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-14 lg:py-0'>
            {
                testimonialInfo.map(({ img, title, info, style }, index) => <InfoCard img={img} title={title} info={info} style={style} key={index}></InfoCard>)
            }
        </div>
    );
};

export default Info;