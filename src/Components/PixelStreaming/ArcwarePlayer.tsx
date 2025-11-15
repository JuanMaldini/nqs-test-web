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

const isArcwareConfigLogPayload = (value: unknown): value is Record<string, unknown> => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const config = value as Record<string, unknown>;
  return (
    "initialSettings" in config &&
    "settings" in config &&
    "useUrlParams" in config
  );
};

const runWithoutArcwareInitLog = <T,>(callback: () => T): T => {
  const originalLog = console.log;
  console.log = (...args: Parameters<typeof console.log>) => {
    if (args.length === 1 && isArcwareConfigLogPayload(args[0])) {
      return;
    }

    originalLog(...args);
  };

  try {
    return callback();
  } finally {
    console.log = originalLog;
  }
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
      const { Application } = runWithoutArcwareInitLog(() =>
        ArcwareInit(
          { shareId, projectId },
          {
            initialSettings: defaultInitialSettings,
            settings: defaultUiSettings,
          }
        )
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
