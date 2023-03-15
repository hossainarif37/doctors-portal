import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../components/Loading';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const { isLoading, isError, data: myAppointments, error } = useQuery({
        queryKey: ['my-appointments', email],
        queryFn: () => fetch(`http://localhost:5000/my-appointments?email=${email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

    })
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        console.error(error);
    }
    if (myAppointments.length === 0) {
        return <div className='min-h-screen flex flex-col items-center'>
            <h3 className='text-2xl'>Looks like you haven't booked any appointments yet!!!</h3>
            <h4 className='text-2xl'>Please book an appointment to see it here.</h4>
        </div>
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl mb-6'>My Appointment</h2>
            <table className="table w-full flex">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row --> */}

                    {
                        myAppointments.map(({ treatmentName, patientName, slot, appointmentDate }, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{patientName}</td>
                                <td>{treatmentName}</td>
                                <td>{appointmentDate}</td>
                                <td>{slot}</td>
                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;