import React from 'react';

const AppointmentOptions = ({ appointmentOptions, selectedDate, refetch, setTreatment }) => {
    const { name, slots } = appointmentOptions;

    console.log();


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
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;