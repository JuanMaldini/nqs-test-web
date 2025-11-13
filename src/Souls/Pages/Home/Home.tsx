import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <Button label="Start" onClick={() => navigate("/interactive")} />
      <div className="home__footer">
        <p className="home__footer-label">Github</p>
        <div className="home__links">
          <a
            href="https://github.com/JuanMaldini/nqs-test-web"
            className="home__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEB
          </a>
          <a
            href="https://github.com/JuanMaldini/nqs-test"
            className="home__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            APP
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
