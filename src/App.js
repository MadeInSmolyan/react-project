import logo from './logo.svg';
import './App.css';
import './utils/firebase';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog'
import Home from './components/Home/Home'
import CarDetails from './components/CarDetails/CarDetails';
import Profile from './components/Profile/Profile';





function App() {
  return (
      <BrowserRouter>
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/details' component={CarDetails} />
        <Route path='/profile' component={Profile} />
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
