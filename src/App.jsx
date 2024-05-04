import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pagina from "./components/PaginaInicial";
import InfoCity from "./components/InfoCity";
import video from "./videos/1118373_4k_Weather_Think_1280x720.mp4";

function App() {
  return (
    <Router>
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <Routes>
          <Route exact path="/" element={<Pagina />}></Route>
          <Route path="/InfoCity/:location" element={<InfoCity />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
