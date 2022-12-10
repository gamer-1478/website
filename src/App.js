import React from 'react';
import './App.css';
import NavigationBar from './Component/navigation/NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router'
import Home from './Component/pages/Home'
import CyborticsHumanoids from './Component/pages/cybortics/CyborticsHumanoid'
import Footer from './Component/footer/Footer'
import Fourzerofour from "./Component/404/404";
import Logger from './Component/pages/Logger';

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

function ATLHACKS() {
  return (
    <div>
      {(() => { Redirect('https://mise-atl.herokuapp.com/') })()}
    </div>
  )
}

function AiDsm() {
  return (
    <div>
      {(() => { Redirect('https://ai-dsm-gamer.netlify.app') })()}
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <div style={{ minHeight: '78.1vh' }}>
          <NavigationBar />
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
            <Route path={process.env.PUBLIC_URL + '/cybortics-humanoid'} element={<CyborticsHumanoids />} />
            <Route path={process.env.PUBLIC_URL + '/ai'} element={<Aihome />} />
            <Route path={process.env.PUBLIC_URL + '/ai-dsm'} element={<AiDsm />} />
            <Route path={process.env.PUBLIC_URL + '/discord'} element={<Logger />} />
            <Route path={process.env.PUBLIC_URL + '/atlhack'} element={<ATLHACKS />} />
            <Route path="*" element={<Fourzerofour />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div >
  );
}
export default App;
