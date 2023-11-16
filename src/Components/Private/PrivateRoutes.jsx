import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

  const { users, loading } = useContext(AuthContext)

  if (loading) {
   return <span className="loading loading-dots loading-lg"></span>
  }


  if (users) {
    return children;
  }
  return <Navigate to="/login"> </Navigate>;
};

export default PrivateRoutes;