import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceInfo = [
        {
            img: fluoride,
            title: 'Fluoride Treatment',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            img: cavity,
            title: 'Cavity Filling',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            img: whitening,
            title: 'Teeth Whitening',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div>
            <div className='text-center mt-20 lg:mt-32 lg:mb-16'>
                <h1 className='text-secondary text-xl font-bold mb-3'>OUR SERVICES</h1>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                {
                    serviceInfo.map(({ img, title, info }, index) => <ServiceCard img={img} title={title} info={info} key={index}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;