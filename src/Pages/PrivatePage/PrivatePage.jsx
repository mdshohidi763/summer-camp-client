import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatePage = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location = useLocation();
    if(loading) {
        return <progress className="progress w-56 mx-auto "></progress>;
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivatePage;