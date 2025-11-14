import "./ItemViewer.css";

export type ItemViewerMediaType = "image" | "video";

interface ItemViewerProps {
  mediaUrl: string;
}

const getMediaType = (url: string): ItemViewerMediaType => {
  const extension = url.split("?")[0]?.split(".").pop()?.toLowerCase();
  if (!extension) return "image";

  const videoExtensions = ["mp4", "mov", "webm", "m4v"];
  return videoExtensions.includes(extension) ? "video" : "image";
};

const ItemViewer = ({ mediaUrl }: ItemViewerProps) => {
  const mediaType = getMediaType(mediaUrl);

  return (
    <article className="item-viewer">
      {mediaType === "video" ? (
        <video
          src={mediaUrl}
          controls
          playsInline
          preload="metadata"
          className="item-viewer__video"
        />
      ) : (
        <img
          src={mediaUrl}
          alt="Gallery item"
          loading="lazy"
          className="item-viewer__image"
        />
      )}
    </article>
  );
};

export default ItemViewer;
