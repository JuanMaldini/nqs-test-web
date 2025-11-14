import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import { minutesToHourFloatString } from "../../Components/Slider/data";
import { useSliderContext } from "../../Components/Slider/SliderContext";
import ArcwarePlayer from "../../Components/PixelStreaming/ArcwarePlayer";
import "./Interactive.css";

const Interactive = () => {
  const { value: sliderValue } = useSliderContext();

  return (
    <section className="interactive">
      <div className="interactive__top-panel">
        <div className="interactive__label-row">
          <span className="interactive__title">
            {minutesToHourFloatString(sliderValue)}
          </span>
        </div>
      </div>
      <div className="interactive__player-container">
        <ArcwarePlayer />
      </div>
      <BottomMenu />
    </section>
  );
};

export default Interactive;
