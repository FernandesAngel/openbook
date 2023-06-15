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
  const { token } = data;
  return (
    <Routes>
      <Route
        path="/"
        element={<PublicRoutes isLogged={!!token} />}
      >
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Route>
      <Route
        path="books"
        element={
          <PrivateRoutes isLogged={!!token} />
        }
      >

         <Route path="home" element={<Home />} />
         <Route path="cadastrar-livro" element={<MyLibrary />} />
      </Route>
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}
