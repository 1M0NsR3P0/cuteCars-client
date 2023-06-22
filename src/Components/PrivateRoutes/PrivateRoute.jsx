import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContxt } from '../Layouts/AuthProviders/AuthContext';
import Loading from '../Shared/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    // console.log(location)
    const {user,loading} = useContext(AuthContxt)
    if(loading){
        return <Loading></Loading>
    }
    if(user) { 
        return children;
    }
    return <Navigate to='/login' state={{from:location}}  replace></Navigate>
};

export default PrivateRoute;