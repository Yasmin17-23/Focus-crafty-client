import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const { user, dataLoading, } = useContext(AuthContext);
    const location = useLocation();
    
    if(dataLoading){
        return <span className="loading loading-infinity loading-lg text-error text-center"></span>
   }

    if(user){
       return children;
    }
    return <Navigate state={location.pathname}  to="/login"></Navigate>;
};

export default PrivateRoute;