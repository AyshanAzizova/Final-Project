import React from 'react';
import AdminNavbar from './Admin/AdminNavbar';
import { Outlet, useLocation } from 'react-router';

const AdminRoot = () => {
    const location = useLocation();
    
    // `/admin` və `/admin/signin` yollarda navbar göstərməmək üçün
    const showNavbar = !(
        location.pathname === '/admin' || 
        location.pathname === '/admin/signin'
    );

    return (
        <>
            {showNavbar && <AdminNavbar />}
            <Outlet/>
        </>
    );
};

export default AdminRoot;
