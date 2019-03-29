import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";

// container
import AddAquarium from "../containers/AddAquarium";
import EditAquarium from "../containers/EditAquarium";
import AddAquariumEvent from "../containers/aquariumEvent/AddAquariumEvent";

import { Container } from "reactstrap";

import Home from "./Home";
import AddWaterTest from "./AddWaterTest";
import ShowWaterTests from "./ShowWaterTests";
import PPMCalculator from "./PPMCalculator";
import LogInPage from "./LogInPage";

import { ToastContainer, toast } from "react-toastify";

import "../styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-water-test" component={AddWaterTest} />
            <Route exact path="/show-water-tests" component={ShowWaterTests} />
            <Route exact path="/ppm-calculator" component={PPMCalculator} />
            <Route exact path="/add-aquarium" component={AddAquarium} />
            <Route exact path="/edit-aquarium" component={EditAquarium} />
            <Route exact path="/log-in" component={LogInPage} />
            <Route
              exact
              path="/add-aquarium-event"
              component={AddAquariumEvent}
            />
            <Route exact path="/edit-aquarium-event" component={EditAquarium} />
          </Container>
          <FooterBar />
          <ToastContainer autoClose={20000} />
        </div>
      </Router>
    );
  }
}

export default App;
