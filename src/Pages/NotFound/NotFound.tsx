import { useMemo } from "react";
import "./NotFound.css";

const ERROR_IMAGES = [
  "/gif/lapresentacion1.gif",
  "/gif/lapresentacion2.gif"
];

const NotFound = () => {
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * ERROR_IMAGES.length);
    return ERROR_IMAGES[randomIndex];
  }, []);

  return (
    <section className="not-found">
      <p className="not-found__text">Error, page not found</p>
      <div className="not-found__image">
        <img src={randomImage} alt="Error" />
      </div>
    </section>
  );
};

export default NotFound;
