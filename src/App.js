import logo from './logo.svg';
import './App.css';
import LoginRegister from './components/Login/LoginRegister'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Header />
      <LoginRegister />

      <Footer />
    </div>
  );
}

export default App;
