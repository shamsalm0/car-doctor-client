import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <p>loading...</p>
    }

    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;