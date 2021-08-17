import React from 'react';
import authContext from './store';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import BonsPlans from './pages/BonsPlans';
import CoVoyageurs from './pages/CoVoyageurs';
import Profil from './pages/Profil';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FormNewTip from './components/FormNewTip';
import GlobalStyle from './components/GlobalStyle';
//Router
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';


const PrivateRoute =({component: Component, ...rest}) => {
  const store = React.useContext(authContext);
  return (
    <Route {...rest} render={props => 
      store.isAuth
      ? <Component {...props} />
      : <Redirect to='/' />
    } />
  );
}

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Accueil/>
        </Route>
        <Route path="/bonsplans">
          <BonsPlans/>
        </Route>
        <Route path="/covoyageurs">
          <CoVoyageurs/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <PrivateRoute path="/profil" render={(props) => <FormNewTip{...props}/>}>
          <Profil/>
        </PrivateRoute>
      </Switch>
      <Footer/>   
    </div>
  );
}

export default App;
