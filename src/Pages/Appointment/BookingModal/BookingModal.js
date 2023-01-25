import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.selectedSlot.value;
        const booking = {
            treatmentName,
            patientName,
            email,
            phone,
            slot,
            date
        }
        console.log(booking);
        setTreatment(null)
    }


    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-5'>
                        <input type="text" className="input input-bordered w-full" value={date} disabled />
                        <select name='selectedSlot' className="select select-bordered  w-full ">
                            {slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;