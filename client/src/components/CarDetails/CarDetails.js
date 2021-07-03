import firebase from "../../utils/firebase";
import * as carsService from "../../services/carsService";
import styles from "./CarDetails.module.css";
import React, { useState, useEffect } from "react";
import InputError from "../Shared/InputError";

const CarDetails = ({ match, history }) => {
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

  const [car, setCar] = useState({});

  useEffect(() => {
    carsService.getOne(match.params.id).then((res) => setCar(res));
  }, [match]);

  const [errorMessage, setErrorMessage] = useState("");

  const onDescriptionChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length < 10) {
      setErrorMessage("Description under 10 symbols!");
    } else {
      setErrorMessage("");
    }
  };

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

  const onOrderSubmitHandler = (e) => {
    e.preventDefault();

    const { fuel, color, rims, drive, textarea, interior } = e.target;
    let imageUrl = car.imageUrl;
    let make = car.make;
    let model = car.model;

    console.log(uid);

    carsService
      .create(
        imageUrl,
        make,
        model,
        fuel.value,
        color.value,
        rims.value,
        drive.value,
        textarea.value,
        interior.value,
        uid
      )
      .then(() => {
        history.push(`/profile/${uid}`);
      });
  };

  return (
    <div className={styles.car_detail}>
      <div className={styles.car_request}>
        <form onSubmit={onOrderSubmitHandler} className={styles.equipment_form}>
          <p className={styles.p_id}>{uid}</p>
          <div className={styles.car_details}>
            <article className={styles.details_article}>
              <img className={styles.car_img} src={car.imageUrl} alt="" />
              <h3>
                Make: <span>{car.make}</span>
              </h3>
              <h3>
                Model: <span>{car.model}</span>
              </h3>
              <p>
                Production Year: <span>{car.year}</span>
              </p>
            </article>
          </div>
          <div className={styles.order_form}>
            <h1>Place an order:</h1>
            <label htmlFor="cars">Choose fuel type:</label>
            <label htmlFor="cars">Choose desired color:</label>
            <br />
            <select className={styles.select} id="fuel" name="fuel">
              {fuelOptions.map((x) => (
                <option key={x.value} value={x.value}>
                  {x.label}
                </option>
              ))}
            </select>

            <select className={styles.select} id="color" name="color">
              {colorOptions.map((x) => (
                <option key={x.value} value={x.value}>
                  {x.label}
                </option>
              ))}
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
            </select>

            <select className={styles.select} id="interior" name="interior">
              {seatsOptions.map((x) => (
                <option key={x.value} value={x.value}>
                  {x.label}
                </option>
              ))}
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
              onBlur={onDescriptionChange}
            ></textarea>
            <InputError>{errorMessage}</InputError>
            {/* <p><span className={styles.textarea} role="textbox"></span></p> */}
            <input
              className={styles.order_btn}
              type="submit"
              value="Finish Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;
