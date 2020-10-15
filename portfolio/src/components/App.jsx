import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import BedBaby from "./Projects/BedBaby";
import Freitag from "./Projects/Freitag";
import Contact from "./Contact";
import Footer from "./Footer";
import {
  AppGlobalStyles,
  HeaderWrapper,
  StyledContainer,
  StyledFooterRow,
  StyledMainRow,
} from "./style";

const App = () => {
  return (
    <HashRouter basename="/">
      <AppGlobalStyles>
        <StyledContainer fluid>
          <StyledMainRow>
            <Col xs={12} md={3} className="pl-0 pr-0">
              <HeaderWrapper>
                <Header />
              </HeaderWrapper>
            </Col>
            <Col
              xs={12}
              md={9}
              className="p-4 d-flex flex-column align-self-center"
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/bed-baby" component={BedBaby} />
                <Route path="/freitag" component={Freitag} />
              </Switch>
            </Col>
          </StyledMainRow>
          <StyledFooterRow>
            <Col
              xs={12}
              md={12}
              className="d-flex flex-column align-items-center"
            >
              <Footer />
            </Col>
          </StyledFooterRow>
        </StyledContainer>
      </AppGlobalStyles>
    </HashRouter>
  );
};

export default App;
