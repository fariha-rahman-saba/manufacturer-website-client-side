import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const dashboardItems = <>

        <li><Link to="/dashboard/my-profile">My Profile</Link></li>
        {
            !admin && <>
                <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                <li><Link to="/dashboard/addReview">Add Review</Link></li>
            </>
        }

        {admin && <>
            <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
            <li><Link to="/dashboard/addProduct">Add Tool</Link></li>
            <li><Link to="/dashboard/manage-tools">Manage Tools</Link></li>
            <li><Link to="/dashboard/manage-orders">Manage Orders</Link></li>
        </>}
    </>;

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-secondary mt-10'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {dashboardItems}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;