import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const [user] = useAuthState(auth);
    const { displayName, email } = user;

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
            appointmentDate: date
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking Successful');
                    setTreatment(null);
                    refetch()

                }
                else {
                    toast.error(data.message)
                }
            })
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
                        <input name='name' type="text" value={displayName} className="input input-bordered w-full" disabled />
                        <input name='email' type="email" value={email} className="input input-bordered w-full" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;