import { Navigate, Outlet } from "react-router-dom";

interface PrivateRoutesProps {
  isLogged: boolean;
  redirectPath?: string;
}

export function PublicRoutes({
  isLogged,
  redirectPath = "/books/home",
}: PrivateRoutesProps) {
  if (isLogged) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
