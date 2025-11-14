import Body from "./Components/Body/Body";
import NavBar from "./Components/NavBar/NavBar";
import AppRoutes from "./Routes/routes";
import { SliderProvider } from "./Components/Slider/SliderContext";

const App = () => {
  return (
    <SliderProvider>
      <div className="app-shell">
        <NavBar />
        <Body>
          <AppRoutes />
        </Body>
      </div>
    </SliderProvider>
  );
};

export default App;
