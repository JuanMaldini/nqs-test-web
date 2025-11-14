import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import { minutesToHourFloatString } from "../../Components/Slider/data";
import { useSliderContext } from "../../Components/Slider/SliderContext";
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
