import { useState } from "react";
import BottomMenu from "../../Components/Source Components/BottomMenu/BottomMenu";
import Slider from "../../Components/Source Components/Slider/Slider";
import { timeRange } from "../../Components/Source Components/Slider/data";
import "./Interactive.css";

const Interactive = () => {
  const [sliderValue, setSliderValue] = useState(0.5);

  return (
    <section className="interactive">
      <div className="interactive__top-panel">
        <div className="interactive__label-row">
          <span className="interactive__title">Daytime</span>
        </div>
        <div className="interactive__slider-row">
          <span className="interactive__time-label">{timeRange.start}</span>
          <Slider value={sliderValue} onChange={setSliderValue} />
          <span className="interactive__time-label">{timeRange.end}</span>
        </div>
      </div>
      {/* <iframe
        src="https://example.com"
        title="Interactive content"
        loading="lazy"
        className="interactive__frame"
      /> */}
      <BottomMenu />
    </section>
  );
};

export default Interactive;
