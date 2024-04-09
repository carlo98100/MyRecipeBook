import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ redirectTo = "/signin", children }) => {
	const { signedInUser } = useContext(UserContext);
	const isAllowed = !!signedInUser; // Check if user exists

	if (!isAllowed) {
		return <Navigate to={redirectTo} />;
	}
	return children ? children : <Outlet />;
};

export default ProtectedRoute;
