import React from 'react';
import Preview from "../views/Preview"
import NotFound from "../views/NotFound";
// import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "../components/Home";
import About from "../components/About.jsx";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import SingleBlog from "../components/SingleBlog";
import Contact from "../components/Contact";


const Routes = () => {
    return (
      <>
         <Router>
            <Switch>
              <Route  exact path="/" component={Home}/>
              <Route  exact path="/resume/" component={About}/>
              <Route path="/music-portfolio" exact component={Portfolio}></Route>
              <Route path="/blog/:id" exact component={SingleBlog}></Route>
              <Route path="/blog" exact component={Blog}></Route>
              <Route path="/contact" exact component={Contact}></Route>
              <Route  component={NotFound}/>
            </Switch>
          </Router>
      </>
    );
}

export default Routes;