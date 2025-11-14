import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./Home.css";

const FILES_DRIVE = "https://drive.google.com/drive/folders/1PwRkx_hXdNVw8VlT6t90lNRg_xwW37Mb?usp=sharing";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <Button label="Start" onClick={() => navigate("/interactive")} />
      <div className="home__footer">
        <div className="home__footer-block">
          <p className="home__footer-label">Github</p>
          <div className="home__links">
            <a
              href="https://github.com/JuanMaldini/nqs-test-web"
              className="home__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web
            </a>
            <a
              href="https://github.com/JuanMaldini/nqs-test"
              className="home__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              App
            </a>
          </div>
        </div>
        <div className="home__footer-block">
          <p className="home__footer-label">Files</p>
          <div className="home__links">
            <button
              type="button"
              className="home__link home__link-button"
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </button>
            <a
              href={FILES_DRIVE}
              className="home__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
