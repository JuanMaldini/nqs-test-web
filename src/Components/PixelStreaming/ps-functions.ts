declare global {
  interface Window {
    emitUIInteraction?: (payload: unknown) => void;
  }
}

export function sendToUE(payload: unknown) {
  try {
    window.emitUIInteraction?.(payload as never);
  } catch (error) {
    console.warn("sendToUE failed", error, payload);
  }
}

export function sendUE(payload: unknown) {
  console.log(payload);
  sendToUE(payload);
}
