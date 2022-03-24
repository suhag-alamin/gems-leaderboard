import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderTop from "./components/Header/HeaderTop";
import Navigation from "./components/Header/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
