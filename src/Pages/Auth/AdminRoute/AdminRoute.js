import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../components/Loading';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading />
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default AdminRoute;