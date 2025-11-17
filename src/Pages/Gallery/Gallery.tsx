import ItemViewer from "../../Components/ItemViewer/ItemViewer";
import "./Gallery.css";
import { galleryItems, galleryNotes } from "./data";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__notes">
        {galleryNotes.map((item) => (
          <article key={item.title} className="gallery__note">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="gallery__grid">
        {galleryItems.map((mediaUrl, index) => (
          <ItemViewer key={`${mediaUrl}-${index}`} mediaUrl={mediaUrl} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
