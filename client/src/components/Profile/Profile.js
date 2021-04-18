import styles from "./Profile.module.css";
import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import EachProfileCard from "./EachProfileCard/EachProfileCard";
// import EachCard from "./EachCard/EachCard";

const Profile = () => {
  const [uid, setUid] = React.useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        setUid(uid);
      }
    });
  }, [uid]);

  const [email, setEmail] = React.useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;
        setEmail(email);
      }
    });
  }, [email]);

  const [cars, setCars] = useState([]);
  console.log(uid);
  useEffect(() => {
    fetch(`http://localhost:5000/cars?uid=${uid}`)
      .then((res) => res.json())
      .then((res) => setCars(res))
      .catch((err) => console.log(err));
  }, [uid]);

  return (
    <div className={styles.user_profile}>
      <img
        id={styles.user_avatar_url}
        src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
        alt="user-profile"
      />
      {/* <h1>User:</h1> */}
      <h2>{email}</h2>

      <p id={styles.user_listings_title}>Your Orders:</p>

      <div className={styles.home_page}>
        {cars.map((x) => (
          <EachProfileCard
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

export default Profile;
