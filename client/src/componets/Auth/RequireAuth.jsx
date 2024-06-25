import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const RequireAuth = ({allowedRoles}) => {
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    return isLoggedIn && allowedRoles.find((myRole) => myRole == role) ? (
        <Outlet/>
    ) : isLoggedIn ? ( <Navigate to="/denied"/>) : (<Navigate to="login" />)
}
export default RequireAuth;
