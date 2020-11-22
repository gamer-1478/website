import React from 'react'
import './App.css';
import NavigationBar from './Component/NavigationBar';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Component/pages/Home'
import GithubRepositories from './Component/pages/GithubRepositories'
import CyborticsHumanoids from './Component/pages/CyborticsHumanoid'
import AboutMe from './Component/pages/AboutMe'


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + '/about-me'} exact component={AboutMe}/>
          <Route path={process.env.PUBLIC_URL + '/github-repos'} exact component={GithubRepositories}/>
          <Route path={process.env.PUBLIC_URL + '/cybortics-humanoid'} exact component={CyborticsHumanoids}/>
          <Route path={process.env.PUBLIC_URL + '/contact-me'}/>
          {/* <Route path='' exact component={}/> */}
          {/* <Route path='' exact component={}/> */}
          {/* <Route path='' exact component={}/> */}
          {/* <Route path='' exact component={}/> */}
          {/* <Route path='' exact component={}/> */}
          {/* <Route path='' exact component={}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
