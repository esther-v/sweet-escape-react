import React from 'react';
import authContext from './store';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import BonsPlans from './pages/BonsPlans';
import CoVoyageurs from './pages/CoVoyageurs';
import Profil from './pages/Profil';
import GlobalStyle from './components/GlobalStyle';
//Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FormNewTip from './components/FormNewTip';

const PrivateRoute =({component: Component, ...rest}) => {
  const store = React.useContext(authContext);
  return (
    <Route {...rest} render={(props) => (
      store.isAuth
      ? <Component {...props} />
      : <Redirect to='/' />
    )} />
  );
}

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
        <PrivateRoute path="/profil" render={(props) => <FormNewTip{...props}/>}>
          <Profil/>
        </PrivateRoute>
      </Switch>
      <Footer/>   
    </BrowserRouter>
  );
}

export default App;
