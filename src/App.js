import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import BonsPlans from './pages/BonsPlans';
import CoVoyageurs from './pages/CoVoyageurs';
import Profil from './pages/Profil';
import GlobalStyle from './components/GlobalStyle';
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
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
        <Route path="/profil">
          <Profil/>
        </Route>
      </Switch>
      <Footer/>   
    </BrowserRouter>
  );
}

export default App;
