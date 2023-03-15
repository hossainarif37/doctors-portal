import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [isAdmin] = useAdmin(user.email);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-3 lg:p-10 bg-[#F1F5F9]">
                {/* <!-- Page content here --> */}
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 bg-base-100 text-base-content gap-1">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/my-appointment'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                    {isAdmin && <li><Link to='/dashboard/all-users'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;