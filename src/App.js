import { ThemeProvider } from "@emotion/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HeaderTop from "./components/Header/HeaderTop";
import Navigation from "./components/Header/Navigation";
import Home from "./components/Home/Home/Home";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#885BFF",
    },
    secondary: {
      main: "#6A8EFF",
    },
    info: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Router>
            {/* header  */}
            <HeaderTop />
            <Navigation />
            {/* routes  */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
            {/* footer  */}
            <Footer />
          </Router>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
