//import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//router page
import { About } from "./Components/pages/About";
import { Contact } from "./Components/pages/Contact";
import { Product } from "./Components/pages/Product";
import { Signin } from "./Components/pages/Signin";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    // all page in App.js
    <Router>
      <Slider />
      {/* router page */}
      <Switch>
        <Route path="/" exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/product" component={Product} />
        <Route path="/sign-in" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
