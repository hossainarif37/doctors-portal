import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className="hero py-5 lg:py-0 lg:min-h-screen lg:px-14" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl mb-10 lg:mb-0" alt='dentist chair' />
                <div className='pt-2  flex justify-center items-center w-1/2 '>
                    <div className='w-80 h-80 rounded-2xl bg-base-100 shadow-xl'>
                        {/* <DatePicker /> */}
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <div className='flex justify-center items-center gap-2 text-center text-secondary mt-10'>
                            <p className='  font-semibold'>Select a date for Appointment</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;