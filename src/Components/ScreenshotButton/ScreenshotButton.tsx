import { useCallback, useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { triggerScreenshot } from "../PixelStreaming/screenshot";
import "./ScreenshotButton.css";

const ScreenshotButton = () => {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = useCallback(async () => {
    if (isCapturing) {
      return;
    }

    setIsCapturing(true);

    try {
      await triggerScreenshot();
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
    </div>
  );
};

export default ScreenshotButton;
