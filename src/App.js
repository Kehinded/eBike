
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
        <Route path="/"> 
          <HeaderSection />
          <ProductSection />
          <TypeSection />
          <AboutSection />
          <TestimonySection />
          <ContactSection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
