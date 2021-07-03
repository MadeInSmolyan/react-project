import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styles from "./About.module.css";

const About = (props) => {
  const mapStyles = {
    width: "900px",
    height: "300px",
    marginLeft: "270px",
    marginBottom: "0px",
  };
  return (
    <div>
      <h1 className={styles.h1}>About Us:</h1>
      <h2 className={styles.h2}>Contacts: +359 876 162 930</h2>
      <h3 className={styles.h3}>Information:</h3>
      <p className={styles.paragraph}>
        Whether you’ve been searching for a deal on a car like the the ones we
        offer, head over to Uni Motors,
        <br /> the Houston area’s premier dealership. Shoppers in Spring and The
        Woodlands visit Parkway Family when they’re looking for a luxurious cars
        <br />
        or cars that will give you goosebumps at great prices. Visit our
        beautiful showroom or view our selection of cars on our website.
      </p>

      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        center
        initialCenter={{ lat: 42.657562, lng: 23.312987 }}
      >
        <Marker position={{ lat: 42.657562, lng: 23.312987 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA7QkP-MoQrdNQ-bTLU4c6UukWufGapVwo",
})(About);
