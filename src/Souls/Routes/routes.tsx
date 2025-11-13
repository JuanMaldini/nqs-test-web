import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Interactive from "../Pages/Interactive/Interactive";
import NotFound from "../Pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interactive" element={<Interactive />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
