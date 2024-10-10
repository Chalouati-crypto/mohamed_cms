import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // Load the authenticated User
  const { isLoadingUser, isAuthenticated } = useUser();

  // if ther is no user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoadingUser) navigate("/login");
    },
    [isAuthenticated, navigate, isLoadingUser]
  );
  // While loading, show Spinner
  if (isLoadingUser) return <Spinner />;
  // if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
