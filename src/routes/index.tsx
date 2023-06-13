import { Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MyLibrary } from "../pages/MyLibrary";

export function Router() {
  const { data } = useAuth();
  const { isLogged } = data;
  return (
    <Routes>
      <Route
        path="/"
        element={<PublicRoutes isLogged={isLogged && isLogged !== undefined} />}
      >
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/minha-biblioteca" element={<MyLibrary />} />
      </Route>
      <Route
        path="/home"
        element={
          <PrivateRoutes isLogged={isLogged && isLogged !== undefined} />
        }
      >
        {/* <Route index element={<Home />} /> */}
      </Route>
      <Route path="*" element={<p>Theres nothing here: 404!</p>} />
    </Routes>
  );
}
