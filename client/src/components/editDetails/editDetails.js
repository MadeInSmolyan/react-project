import styles from "./editDetails.module.css";
import * as carsService from "../../services/carsService";
import React, { useState, useEffect } from "react";
import firebase from "../../utils/firebase";

const EditDetails = ({ match, history }) => {
  const [uid, setUid] = React.useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        setUid(uid);
      } else {
        history.push(`/login`);
      }
    });
  }, []);

  let [car, setCar] = useState({});

  useEffect(() => {
    carsService.getOne(match.params.id).then((res) => setCar(res));
  }, [match]);

  console.log(match);

  const fuelOptions = [
    { label: "Petrol", value: "Petrol" },
    { label: "Gasoline", value: "Gasoline" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Diesel", value: "Diesel" },
  ];

  const colorOptions = [
    { label: "Black", value: "Black" },
    { label: "Nardo Grey", value: "Nardo Grey" },
    { label: "Nogaro Blue", value: "Nogaro Blue" },
    { label: "Yellow", value: "Yellow" },
  ];

  const rimsOptions = [
    { label: "18 Inch Rims", value: "18 Inch Rims" },
    { label: "19 Inch Rims", value: "19 Inch Rims" },
    { label: "20 Inch Rims", value: "20 Inch Rims" },
    { label: "21 Inch Rims", value: "21 Inch Rims" },
  ];

  const driveOptions = [
    { label: "All Wheel Drive", value: "All Wheel Drive" },
    { label: "Rear Wheel Drive", value: "Rear Wheel Drive" },
    { label: "Front Wheel Drive", value: "Front Wheel Drive" },
  ];

  const seatsOptions = [
    { label: "Leather Interior", value: "Leather Interior" },
    { label: "Alcantara Interior", value: "Alcantara Interior" },
    { label: "Suede Interior", value: "Suede Interior" },
  ];

  const onEditSubmitHandler = (e) => {
    e.preventDefault();

    let updatedCar = {
      ...car,
      fuel: e.target.fuel.value,
      color: e.target.color.value,
      rims: e.target.rims.value,
      drive: e.target.drive.value,
      interior: e.target.interior.value,
      textarea: e.target.textarea.value,
    };

    const id = match.params.id;

    carsService.update(id, updatedCar).then(() => {
      history.push(`/profile/${uid}`);
    });
  };

  return (
    <div className={styles.car_request}>
      <form onSubmit={onEditSubmitHandler} className={styles.equipment_form}>
        <div className={styles.order_form}>
          <h1>Edit your order:</h1>
          <label htmlFor="cars">Choose fuel type:</label>
          <label htmlFor="cars">Choose desired color:</label>
          <br />
          <select className={styles.select} id="fuel" name="fuel">
            {fuelOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
            <option key={car.fuel} value={car.fuel} selected>
              {car.fuel}
            </option>
          </select>

          <select className={styles.select} id="color" name="color">
            {colorOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
            <option key={car.color} value={car.color} selected>
              {car.color}
            </option>
          </select>
          <br />

          <label htmlFor="cars">Choose rims size:</label>
          <br />
          <select className={styles.select} id="rims" name="rims">
            {rimsOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
            <option key={car.rims} value={car.rims} selected>
              {car.rims}
            </option>
          </select>
          <br />

          <label htmlFor="cars">Choose drivetrain:</label>
          <label htmlFor="cars">Choose Your Interior:</label>
          <br />
          <select className={styles.select} id="drive" name="drive">
            {driveOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
            <option key={car.drive} value={car.drive} selected>
              {car.drive}
            </option>
          </select>

          <select className={styles.select} id="interior" name="interior">
            {seatsOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
            <option key={car.interior} value={car.interior} selected>
              {car.interior}
            </option>
          </select>
          <br />
          <br />

          <label htmlFor="cars">Enter additional preferences:</label>
          <br />
          <textarea
            className={styles.textarea}
            name="textarea"
            cols="60"
            rows="4"
            defaultValue={car.textarea}
          ></textarea>
          {/* <p><span className={styles.textarea} role="textbox"></span></p> */}
          <input
            className={styles.order_btn}
            type="submit"
            value="Finish Order"
          />
        </div>
      </form>
    </div>
  );
};

export default EditDetails;
