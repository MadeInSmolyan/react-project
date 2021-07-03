import styles from "./Catalog.module.css";
import React, { useEffect, useState } from "react";
import EachCard from "./EachCard/EachCard";
import firebase from "../../utils/firebase";

const Catalog = ({ match, isAuthenticated}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((res) => setCars(res))
      .catch((err) => console.log(err));
  }, []);

  const [uid, setUid] = React.useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        setUid(uid);
      }
    });
  }, []);

  const firstCars = cars.slice(0, 4);
  const secondCars = cars.slice(4, 8);

  // console.log(secondCars);

  return (
    <div>
      <h1 className={styles.available}>Cars for Sale:</h1>
      <div className={styles.home_page}>
        {firstCars.map((x) => (
          <EachCard
            key={x.id}
            id={x.id}
            make={x.make}
            model={x.model}
            year={x.year}
            imageUrl={x.imageUrl}
          />
        ))}
      </div>
      <div className={styles.home_page} id={styles.home_page1}>
        {secondCars.map((x) => (
          <EachCard
            key={x.id}
            id={x.id}
            make={x.make}
            model={x.model}
            year={x.year}
            imageUrl={x.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
