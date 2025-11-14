import { useCallback, useEffect, useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { captureScreenshotBlob } from "../PixelStreaming/screenshot";
import "./ScreenshotButton.css";

const ScreenshotButton = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleCapture = useCallback(async () => {
    if (isCapturing) {
      return;
    }

    setIsCapturing(true);

    try {
      const { blob } = await captureScreenshotBlob();
      setPreviewUrl((previous) => {
        if (previous) {
          URL.revokeObjectURL(previous);
        }
        return URL.createObjectURL(blob);
      });
    } catch (error) {
      console.warn(
        "Screenshot capture failed",
        error instanceof Error ? error.message : error
      );
    } finally {
      setIsCapturing(false);
    }
  }, [isCapturing]);

  return (
    <div className="screenshot-button">
      <button
        type="button"
        className="screenshot-button__trigger"
        onClick={handleCapture}
        disabled={isCapturing}
        aria-label="Capturar captura de pantalla"
      >
        <MdOutlineAddPhotoAlternate size={20} />
      </button>
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="Última captura"
          className="screenshot-button__preview"
        />
      ) : null}
    </div>
  );
};

export default ScreenshotButton;
