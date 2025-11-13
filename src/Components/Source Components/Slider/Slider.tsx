import { type ChangeEvent } from "react";
import "./Slider.css";

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  className?: string;
};

const Slider = ({
  value,
  onChange,
  min = 0,
  max = 1,
  step = 0.01,
  label,
  className = "",
}: SliderProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <label className={`slider ${className}`.trim()}>
      {label ? <span className="slider__label">{label}</span> : null}
      <input
        type="range"
        className="slider__input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Slider;
