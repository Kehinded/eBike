
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom"
import HeaderSection from "./section/HeaderSection"
import ProductSection from "./section/ProductSection"
import TypeSection from "./section/TypeSection"
import AboutSection from "./section/AboutSection"
import ContactSection from "./section/ContactSection"
import TestimonySection from "./section/TestimonySection"

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path={"/" || "/header"} component={HeaderSection} />
      <Route exact path={"/" || "/products"} component={ProductSection} />
      <Route exact path={"/" || "/types"} component={TypeSection} />
      <Route exact path={"/" || "/about"} component={AboutSection} />
      <Route exact path={"/" || "/testimonies"} component={TestimonySection} />
      <Route exact path={"/" || "/contact"} component={ContactSection} />
      </Switch>
    </div>
  );
}

export default App;
