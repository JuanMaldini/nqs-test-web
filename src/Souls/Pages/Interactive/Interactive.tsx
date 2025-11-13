import { useState } from "react";
import BottomMenu from "../../../Components/Source Components/BottomMenu/BottomMenu";
import Slider from "../../../Components/Source Components/Slider/Slider";
import "./Interactive.css";

const Interactive = () => {
  const [sliderValue, setSliderValue] = useState(0.5);

  return (
    <section className="interactive">
      <div className="interactive__top-panel">
        <Slider value={sliderValue} onChange={setSliderValue} label="Daytime" />
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
