import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <Button label="Start" onClick={() => navigate("/interactive")} />
    </section>
  );
};

export default Home;
