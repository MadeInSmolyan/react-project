import logo from './logo.svg';
import './App.css';
import LoginRegister from './components/Login/LoginRegister'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog'
import Home from './components/Home/Home'
import CarDetails from './components/CarDetails/CarDetails';
import Profile from './components/Profile/Profile';





function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <LoginRegister />
      <Catalog />
      <CarDetails />

      <Profile />
      <Footer />
    </div>
  );
}

export default App;
