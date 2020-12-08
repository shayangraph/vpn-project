//import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Aboutvpn from "./Components/Aboutvpn/Aboutvpn";
import Items from "./Components/Items/Items";
import Reason from "./Components/Reason/Reason";
import Tweet from "./Components/Tweet/Tweet";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
//router page
import { About } from "./Components/pages/About";
import { Contact } from "./Components/pages/Contact";
import { Product } from "./Components/pages/Product";
import { Signin } from "./Components/pages/Signin";

function App() {
  return (
    // all page in App.js
    <Router>
      {/* layers of website dont change */}
      <Slider />
      <Aboutvpn />
      <Items />
      <Reason />
      <Tweet />
      <Footer />
      {/* router page */}
      <Switch>
        <Route path="/" exact />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/product" exact component={Product} />
        <Route path="/sign-in" exact component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
