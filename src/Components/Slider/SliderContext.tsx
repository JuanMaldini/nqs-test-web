import { createContext, useContext, useState, type ReactNode } from "react";
import { initialSliderMinutes } from "./data";

export type SliderContextState = {
  value: number;
  setValue: (value: number) => void;
};

const SliderContext = createContext<SliderContextState | undefined>(undefined);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(initialSliderMinutes);

  return (
    <SliderContext.Provider value={{ value, setValue }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSliderContext must be used within a SliderProvider");
  }
  return context;
};
