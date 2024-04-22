import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pagina from "./components/PaginaInicial";
import InfoCity from "./components/InfoCity";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Pagina />}></Route>
        <Route path="/InfoCity/:location" element={<InfoCity />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
