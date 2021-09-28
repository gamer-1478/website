import React from 'react';
import './App.css';
import NavigationBar from './Component/navigation/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/pages/Home'
import GithubRepositories from './Component/pages/gitrepos/GithubRepositories'
import CyborticsHumanoids from './Component/pages/cybortics/CyborticsHumanoid'
import Footer from './Component/footer/Footer'
import fourzerofour from "./Component/404/404";
//import QuizLoad from './Component/pages/quiz/QuizLoad';

function Aihome() {
  return (
    <div>
      {window.location.href = "https://sway.office.com/92QqdnEbHCOkIfjA?ref=Link"}
    </div>
  )
}

function Redirect(url) {
  return (
    <div>
      {window.location.href = url}
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <div style={{ minHeight: '78.1vh' }}>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
            <Route path={process.env.PUBLIC_URL + '/github-repos'} exact component={GithubRepositories} />
            <Route path={process.env.PUBLIC_URL + '/cybortics-humanoid'} exact component={CyborticsHumanoids} />
            <Route path={process.env.PUBLIC_URL + '/ai'} exact component={Aihome} />
            <Route path={process.env.PUBLIC_URL + '/ai-dsm'} exact component={() => { Redirect('https://ai-dsm-gamer.netlify.app') }} />
            {/* <Route path={process.env.PUBLIC_URL + '/quiz-science-hhw'} exact component={QuizLoad} /> */}
            <Route path="*" exact component={fourzerofour} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;