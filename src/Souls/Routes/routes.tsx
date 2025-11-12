import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Interactive from "../Pages/Interactive/Interactive";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interactive" element={<Interactive />} />
    </Routes>
  );
};

export default AppRoutes;
