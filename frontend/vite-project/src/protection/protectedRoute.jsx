import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const usertoken = localStorage.getItem("usertoken");
  if (usertoken) {
    return children;
  } else {
    return <Navigate to={"/loginpage"}></Navigate>;
  }
}
export default ProtectedRoute;
