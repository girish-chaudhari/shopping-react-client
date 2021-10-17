import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/content/Footer";
import Home from "./components/home/Home";
import ElectronicsProduct from "./components/pages/ElectronicsProduct";
import SingleView from "./components/pages/SingeView";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./components/theme";
import NavBar from "./components/content/NavBar";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ElectronicsProduct} />
          <Route path="/singleview" component={SingleView} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
