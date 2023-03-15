import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../components/Loading';

const AllUsers = () => {
    const { isLoading, isError, data: allUsers, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())

    })
    if (isLoading) {
        return <Loading />
    }
    if (isError || error) {
        console.log(isError, error);
    }
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('Make a admin successful')
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map((user, i) => <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white font-bold  bg-gradient-to-r from-secondary to-primary'>Make Admin</button>}</td>
                        <td><button className="btn btn-xs bg-[#DF2E38] text-white border-[#DF2E38] font-bold">Delete</button></td>
                    </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;