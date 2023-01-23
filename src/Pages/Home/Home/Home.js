import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <div className='px-3 lg:px-5'>
                <Banner />
                <Info />
                <Services />
                <Treatment />
            </div>
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;