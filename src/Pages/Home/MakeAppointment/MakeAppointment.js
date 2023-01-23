import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import bg from '../../../assets/images/appointment.png'
import './MakeAppointment.css'
import Button from '../../../components/Button';

const MakeAppointment = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row px-7 py-16 lg:px-16">
                <img className='appointmentImage hidden lg:block h-[600px]' src={doctor} alt='' />
                <div className='text-white'>
                    <h1 className='text-secondary text-xl font-bold mb-3'>Appointment</h1>
                    <h2 className='text-4xl'>Make an appointment Today</h2>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;