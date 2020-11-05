import React from 'react';

// router dom
import {
  Switch,
  Route
} from "react-router-dom";

// Components
import NavLower from './components/Navbar/NavbarLower'
import TopBar from './components/TopBar'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavbarUpper from './components/Navbar/NavbarUpper';


export default function App() {
  return (
    <div>


        <TopBar/>
        <NavbarUpper/>
        <NavLower/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>

        </Switch>

      </div>

  )
}
