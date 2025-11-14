declare module "@arcware-cloud/pixelstreaming-websdk" {
  export interface ArcwareInitialSettings {
    AutoConnect?: boolean;
    StartVideoMuted?: boolean;
    AutoPlayVideo?: boolean;
    [key: string]: unknown;
  }

  export interface ArcwareUISettings {
    infoButton?: boolean;
    micButton?: boolean;
    audioButton?: boolean;
    fullscreenButton?: boolean;
    settingsButton?: boolean;
    connectionStrengthIcon?: boolean;
    [key: string]: unknown;
  }

  export interface ArcwareOptions {
    initialSettings?: ArcwareInitialSettings;
    settings?: ArcwareUISettings | Record<string, unknown>;
    [key: string]: unknown;
  }

  export interface ArcwareConfig {
    shareId?: string;
    projectId?: string;
    [key: string]: unknown;
  }

  export interface ArcwareApplication {
    rootElement: HTMLElement;
    emitUIInteraction?: (payload: unknown) => void;
    getApplicationResponse?: (callback: (response: string) => void) => void;
    webRtcController?: {
      file?: {
        data?: BlobPart[];
        mimetype?: string;
        extension?: string;
      };
    };
    destroy?: () => void;
    [key: string]: unknown;
  }

  export function ArcwareInit(
    config: ArcwareConfig,
    options?: ArcwareOptions
  ): { Application: ArcwareApplication };
}
