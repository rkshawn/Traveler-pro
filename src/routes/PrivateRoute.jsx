import { useContext } from "react";
import { TravelContext } from "../Provider/TravelProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user} = useContext(TravelContext);
    const location = useLocation();
    if(user){
        return <div>{children}</div>
    }
    return  <Navigate to='/login'  state={location?.pathname || '/'} ></Navigate>
};

export default PrivateRoute;