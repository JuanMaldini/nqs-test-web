import { useLocation, useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";
import {
  timeRange,
  timeRangeMinutes,
  minutesToHourFloatString,
} from "../Slider/data";
import { emitSignalDescriptor } from "../PixelStreaming/EmitSignalDescriptor";
import { useSliderContext } from "../Slider/SliderContext";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { value: sliderValue, setValue: setSliderValue } = useSliderContext();

  const isInteractive = location.pathname === "/interactive";

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    emitSignalDescriptor(minutesToHourFloatString(value));
  };

  return (
    <nav className="app-navbar">
      <div className="app-navbar__brand" onClick={() => navigate("/")}>
        <img
          src="/icons/Logo.svg"
          alt="NQS Test logo"
          className="app-navbar__logo"
        />
        <span className="app-navbar__title">Juan Maldini</span>
      </div>
      {isInteractive ? (
        <div className="app-navbar__center">
          <span className="app-navbar__time">{timeRange.start}</span>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            min={timeRangeMinutes.start}
            max={timeRangeMinutes.end}
            step={1}
            className="app-navbar__slider"
          />
          <span className="app-navbar__time">{timeRange.end}</span>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
