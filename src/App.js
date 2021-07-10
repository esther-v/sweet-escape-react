import React from 'react';
import Nav from './components/Nav';
import Accueil from './pages/Accueil';
import BonsPlans from './pages/BonsPlans';
import CoVoyageurs from './pages/CoVoyageurs';
import GlobalStyle from './components/GlobalStyle';
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <Accueil/>
        </Route>
        <Route path="/bonsplans">
          <BonsPlans/>
        </Route>
        <Route path="/covoyageurs">
          <CoVoyageurs/>
        </Route>
      </Switch>   
    </div>
  );
}

export default App;
