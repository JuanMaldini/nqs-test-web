import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="app-navbar">
      <div className="app-navbar__brand" onClick={() => navigate("/")}>
        <img
          src="/icons/Logo.svg"
          alt="NQS Test logo"
          className="app-navbar__logo"
        />
        {/* <span className="app-navbar__title">NQS Test - Juan Maldini</span> */}
      </div>
    </nav>
  );
};

export default NavBar;
