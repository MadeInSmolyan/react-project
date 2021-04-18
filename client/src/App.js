import "./App.css";
import React, { useContext } from "react";
import firebase from "./utils/firebase";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Home from "./components/Home/Home";
import CarDetails from "./components/CarDetails/CarDetails";
import Profile from "./components/Profile/Profile";
import { useEffect, useState } from "react";

function App() {
  // const [uid, setUid] = React.useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       const { uid } = user;
  //       setUid(uid);
  //     }
  //   });
  // }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((res) => setCars(res))
      .catch((err) => console.log(err));
  }, []);

  // console.log(cars);

  return (
    <BrowserRouter>
      <div className="App">
        <Header email={user?.email} isAuthenticated={Boolean(user)} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/cars/details/:id" component={CarDetails} />
          <Route path="/profile/:id" component={Profile} />
          <Route
            path="/logout"
            render={() => {
              firebase.auth().signOut();
              return <Redirect to="/" />;
            }}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
