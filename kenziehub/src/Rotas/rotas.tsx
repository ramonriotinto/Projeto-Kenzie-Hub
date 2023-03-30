import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard/Dashboard";
import { Login } from "../Pages/login/login";
import { Registro } from "../Pages/registro/registro";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
