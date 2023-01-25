import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='min-h-screen py-20'>
            <h2 className='text-center text-xl text-secondary font-semibold'>Available Services on {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 px-5 lg:px-10 mt-10 lg:mt-20'>
                {
                    appointmentOptions.map(option => <AppointmentOptions key={option._id} appointmentOptions={option} selectedDate={selectedDate} />)
                }
            </div>

        </div>
    );
};

export default AvailableAppointment;