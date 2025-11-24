import ItemViewer from "../../Components/ItemViewer/ItemViewer";
import "./Gallery.css";
import { galleryItems, galleryNotes } from "./data";

const Gallery = () => {
  const cloudfrontDomain =
    import.meta.env.VITE_CLOUDFRONT?.replace(/\/$/, "") ?? "";
  const cloudfrontPrefix = cloudfrontDomain
    ? cloudfrontDomain.startsWith("http")
      ? cloudfrontDomain
      : `https://${cloudfrontDomain}`
    : "";

  const resolvedGalleryItems = galleryItems.map((item) => {
    if (!cloudfrontPrefix || /^https?:\/\//i.test(item)) {
      return item;
    }
    const normalizedPath = item.replace(/^\/+/, "");
    return `${cloudfrontPrefix}/${normalizedPath}`;
  });

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
        {resolvedGalleryItems.map((mediaUrl, index) => (
          <ItemViewer key={`${mediaUrl}-${index}`} mediaUrl={mediaUrl} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
