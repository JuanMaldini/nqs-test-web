import { useEffect, useRef } from "react";
import { ArcwareInit } from "@arcware-cloud/pixelstreaming-websdk";
import { registerScreenshotApplication } from "./screenshot";
import "./ArcwarePlayer.css";

const defaultInitialSettings = {
  AutoConnect: true,
  StartVideoMuted: true,
  AutoPlayVideo: true,
};

const defaultUiSettings = {
  infoButton: false,
  micButton: false,
  audioButton: false,
  fullscreenButton: false,
  settingsButton: false,
  connectionStrengthIcon: false,
};

const ArcwarePlayer = () => {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!videoContainerRef.current) {
      return;
    }

    const shareId = import.meta.env.VITE_ARCWARE_SHARE_ID;
    const projectId = import.meta.env.VITE_ARCWARE_PROJECT_ID;

    try {
      const { Application } = ArcwareInit(
        { shareId, projectId },
        {
          initialSettings: defaultInitialSettings,
          settings: defaultUiSettings,
        }
      );

      const root = Application.rootElement;
      videoContainerRef.current.appendChild(root);
      registerScreenshotApplication(Application);

      window.emitUIInteraction = (payload: unknown) => {
        if (typeof payload === "string") {
          Application.emitUIInteraction?.(payload);
          return;
        }
        Application.emitUIInteraction?.(payload);
      };

      return () => {
        window.emitUIInteraction = undefined;
        if (root.parentElement) {
          root.parentElement.removeChild(root);
        }
        Application.destroy?.();
      };
    } catch (error) {
    }
  }, []);

  return <div ref={videoContainerRef} className="arcware-player" />;
};

export default ArcwarePlayer;
