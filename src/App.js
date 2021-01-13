import React from 'react'
import './App.css';
import NavigationBar from './Component/NavigationBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Component/pages/Home'
import GithubRepositories from './Component/pages/GithubRepositories'
import CyborticsHumanoids from './Component/pages/CyborticsHumanoid'
import AboutMe from './Component/pages/AboutMe'
import Aihome from "./Component/Aihome";
import Footer from './Component/Footer'
import fourzerofour from "./Component/404";
import Testimonials from './Component/pages/Testimonials'
import Dsm from './Component/pages/dsm'

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + '/about-me'} exact component={AboutMe} />
          <Route path={process.env.PUBLIC_URL + '/github-repos'} exact component={GithubRepositories} />
          <Route path={process.env.PUBLIC_URL + '/cybortics-humanoid'} exact component={CyborticsHumanoids} />
          <Route path={process.env.PUBLIC_URL + '/artificialTechnologyHomework'}>
            <Redirect to={process.env.PUBLIC_URL + '/ai'} />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/ai'} exact component={Aihome} />
          <Route path={process.env.PUBLIC_URL + '/testimonials'} exact component={Testimonials } />
          <Route path={process.env.PUBLIC_URL + '/ai-dsm'} exact component={Dsm} />
          <Route path="*" exact component={fourzerofour} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
export default App;