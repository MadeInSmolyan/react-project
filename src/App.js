import './App.css';
import {auth} from './utils/firebase';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog'
import Home from './components/Home/Home'
import CarDetails from './components/CarDetails/CarDetails';
import Profile from './components/Profile/Profile';
import { useEffect, useState } from 'react';





function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, [])

  return (
      <BrowserRouter>
    <div className="App">
      
      <Header email={user?.email} isAuthenticated={Boolean(user)} />
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/details' component={CarDetails} />
        <Route path='/profile' component={Profile } />
        <Route path='/logout' render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }} />
      </Switch>
      
      {/* <Home />
      <LoginRegister />
      <Catalog />
      <CarDetails />
      
    <Profile /> */}
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
