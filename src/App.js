import React, { Component } from 'react';

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Main from './router/index';
import Cross from './router/route_01/01';
import Callback from './router/route_02/02';
import RndPage from './page/rndPage';


class App extends Component {
  state = {
    name:'gxy'
  }
  render() {
    return (
      <Router>
        <div>
          <Routes>
          <Route exact path="/" element={<Main></Main>}></Route>
          <Route exact path="/cross" element={<Cross></Cross>}></Route>
          <Route exact path="/callback" element={<Callback></Callback>}></Route>
          <Route exact path="/rnd" element={<RndPage></RndPage>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
