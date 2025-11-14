import ItemViewer from "../../Components/ItemViewer/ItemViewer";
import "./Gallery.css";
import { galleryItems } from "./data";

const Gallery = () => {
  return (
    <section className="gallery">
      <header className="gallery__header">
        <p className="gallery__subtitle">
          Colección visual del proceso detrás de la app: conceptos, prototipos y
          clips técnicos listos para Roadtest.
        </p>
      </header>

      <div className="gallery__grid">
        {galleryItems.map((mediaUrl, index) => (
          <ItemViewer key={`${mediaUrl}-${index}`} mediaUrl={mediaUrl} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
