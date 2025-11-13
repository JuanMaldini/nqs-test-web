import Body from "./Components/Body/Body";
import NavBar from "./Components/NavBar/NavBar";
import AppRoutes from "./Routes/routes";

const App = () => {
  return (
    <div className="app-shell">
      <NavBar />
      <Body>
        <AppRoutes />
      </Body>
    </div>
  );
};

export default App;
