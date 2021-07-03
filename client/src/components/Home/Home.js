import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id={styles.home_view}>
      <div id={styles.welcome_container}>
        <h1>Welcome to Uni Motors</h1>
        <img src="/vecteezy_muscle-car_1193865.png" alt="carIntro" />
        <h2>To see all the listings click the link below:</h2>
        <div id={styles.button_div}>
          <Link to="/catalog" className={styles.button}>
            Listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
