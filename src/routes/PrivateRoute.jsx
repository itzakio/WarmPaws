import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
     const {user, userLoading} = use(AuthContext);
     const location = useLocation()

    if(userLoading){
        return <Loading/>
    }
    if(user && user.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"/>
    
};

export default PrivateRoute;