import { sendUE } from "./ps-functions";
import type { ArcwareApplication } from "@arcware-cloud/pixelstreaming-websdk";

type ScreenshotFile = {
  data?: BlobPart[];
  mimetype?: string;
  extension?: string;
};

let appRef: ArcwareApplication | null = null;
let listenerAttached = false;
let screenshotInterceptor: ((file: ScreenshotFile) => void) | null = null;

const downloadScreenshot = (file: ScreenshotFile) => {
  if (!file?.data) {
    return;
  }

  try {
    const blob = new Blob(file.data, { type: file.mimetype ?? "image/png" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    anchor.download = `render_${timestamp}.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.warn("downloadScreenshot failed", error);
  }
};

export const registerScreenshotApplication = (app: ArcwareApplication) => {
  appRef = app;

  if (listenerAttached) {
    return;
  }

  listenerAttached = true;

  try {
    app.getApplicationResponse?.((response: string) => {
      if (typeof response !== "string") {
        return;
      }

      if (!response.startsWith("CreateScreenshot")) {
        return;
      }

      const file = (
        appRef as unknown as { webRtcController?: { file?: ScreenshotFile } }
      )?.webRtcController?.file;

      if (!file) {
        return;
      }

      if (screenshotInterceptor) {
        const consume = screenshotInterceptor;
        screenshotInterceptor = null;
        try {
          consume(file);
        } catch (error) {
          console.warn("screenshot interceptor failed", error);
        }
        return;
      }

      downloadScreenshot(file);
    });
  } catch (error) {
    console.warn("registerScreenshotApplication failed", error);
  }
};

export const triggerScreenshot = () => {
  try {
    sendUE({ CreateScreenshot: "" });
  } catch (error) {
    console.warn("triggerScreenshot failed", error);
  }
};

export const captureScreenshotBlob = () =>
  new Promise<{ blob: Blob; mimetype: string; extension: string }>(
    (resolve, reject) => {
      if (!appRef) {
        reject(new Error("Arcware application not registered"));
        return;
      }

      if (screenshotInterceptor) {
        reject(new Error("A screenshot capture is already in progress"));
        return;
      }

      screenshotInterceptor = (file: ScreenshotFile) => {
        try {
          const mimetype = file?.mimetype ?? "image/png";
          const extension = file?.extension ?? ".png";
          const blob = new Blob(file?.data ?? [], { type: mimetype });
          resolve({ blob, mimetype, extension });
        } catch (error) {
          reject(error instanceof Error ? error : new Error(String(error)));
        }
      };

      try {
        triggerScreenshot();
      } catch (error) {
        screenshotInterceptor = null;
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    }
  );
