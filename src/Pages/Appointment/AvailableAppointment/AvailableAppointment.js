import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP');
    const [treatment, setTreatment] = useState(null);
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointment-options', date],
        queryFn: () => fetch(`http://localhost:5000/v2/appointment-options?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='min-h-screen py-20'>
            <h2 className='text-center text-xl text-secondary font-semibold'>Available Services on {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 px-5 lg:px-10 mt-10 lg:mt-20'>
                {
                    appointmentOptions.map(option => <AppointmentOptions key={option._id} appointmentOptions={option} selectedDate={selectedDate} setTreatment={setTreatment} refetch={refetch} />)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate} refetch={refetch} />}
        </div>
    );
};

export default AvailableAppointment;