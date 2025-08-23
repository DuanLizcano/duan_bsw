import { Navigate } from "react-router-dom";

const ValidateAccess = ({ children }: { children: React.ReactNode }) => {
  const isValidUser = localStorage.getItem("isValidUser") === "true";
  if (!isValidUser) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ValidateAccess;
