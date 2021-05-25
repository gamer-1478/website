import React from 'react'
import './App.css';
import NavigationBar from './Component/navigation/NavigationBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Component/pages/Home'
import GithubRepositories from './Component/pages/gitrepos/GithubRepositories'
import CyborticsHumanoids from './Component/pages/cybortics/CyborticsHumanoid'
import AboutMe from './Component/pages/about/AboutMe'
import Footer from './Component/footer/Footer'
import fourzerofour from "./Component/404/404";
import Testimonials from './Component/pages/testimonial/Testimonials'
import Dsm from './Component/pages/dsm/dsm'
import QuizLoad from './Component/pages/quiz/QuizLoad';

function Aihome() {
  return (
      <>
      {window.location.href = "https://sway.office.com/92QqdnEbHCOkIfjA?ref=Link"}
      </>
  )
}
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
          <Route path={process.env.PUBLIC_URL + '/quiz-science-hhw'} exact component={QuizLoad}/>
          <Route path="*" exact component={fourzerofour} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
export default App;