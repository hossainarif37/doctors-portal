import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOptions = ({ appointmentOptions, selectedDate }) => {
    const { name, slots } = appointmentOptions;
    const [treatment, setTreatment] = useState(null)

    return (
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                {/* <div onClick={() => setCloseModal(false)} className="card-actions justify-end"> */}
                <div className="card-actions justify-end">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOptions)}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white font-bold  bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
                    {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate} />}
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;