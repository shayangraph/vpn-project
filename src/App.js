//import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//router page
import { About } from "./Components/pages/About";
import { Contact } from "./Components/pages/Contact";
import { Product } from "./Components/pages/Product";
import Signin from "./Components/pages/Signin";
import Signup from "./Components/pages/Signup";
import Home from "./Components/pages/Home";

function App() {
  return (
    // all page in App.js
    <Router>
      {/* router page */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/product" exact component={Product} />
        <Route path="/sign-in" exact component={Signin} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
