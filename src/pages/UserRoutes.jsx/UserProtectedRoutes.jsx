import React, { useEffect } from 'react';
import UserNavbar from '../../components/UserNavbar';
import { Outlet, useNavigate } from 'react-router-dom';
import UserFooter from '../../components/UserFooter';

const UserProtectedRoutes = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) {
        return null; // or a loading spinner if you want
    }

    return (
        <>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </>
    );
};

export default UserProtectedRoutes;
