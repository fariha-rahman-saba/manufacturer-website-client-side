import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Header = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/my-portfolio">My Portfolio</Link></li>
        {
            user && <>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </>
        }
        <li>{user ? <>
            <div className='uppercase
            '>{user.displayName}</div>
            <button className="btn btn-ghost" onClick={logout} >Sign Out</button></> : <Link to="/login">Login</Link>}</li>
    </>;

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
        <div>
            <div className="navbar bg-accent text-white">
                <div className="navbar-start">
                    {/* For small device dropdown menu */}
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <Link className="btn btn-ghost normal-case text-xl" to="/">Tool Mania</Link>


                </div>

                {/* For large device dropdown hidden */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                {/* For small device dashboard sidebar */}
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                            {dashboardItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;