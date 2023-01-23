import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonialInfo = [
        {
            img: people1,
            name: 'Winson Herry',
            location: 'California',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            img: people2,
            name: 'Winson Herry',
            location: 'California',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            img: people3,
            name: 'Winson Herry',
            location: 'California',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <div className='min-h-screen pb-20'>
            <div className='flex justify-between items-end px-14 pb-16'>
                <div className='mt-20 lg:mt-24 lg:mb-16'>
                    <h1 className='text-secondary text-xl font-bold mb-3'>Testimonial</h1>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <img className='w-48 hidden lg:block' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20 '>
                {
                    testimonialInfo.map((info, index) => <TestimonialCard info={info} key={index}></TestimonialCard>)
                }
            </div>

        </div>
    );
};

export default Testimonial;