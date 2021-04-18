
import firebase from '../../utils/firebase';
import * as carsService from '../../services/carsService'
import styles from './CarDetails.module.css'
import React,{useState,useEffect} from 'react'

const CarDetails = ({match}) => {

    const [uid, setUid] = React.useState(null);

useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const { uid } = user;
      setUid(uid);
    }
  });
}, []);
// console.log(uid);

    let [car, setCar] = useState({});

    useEffect(() => {
        carsService.getOne(match.params.id)
        .then(res => setCar(res))
    }, [match]);

    const fuelOptions = [
        {label: 'Petrol', value: 'petrol'},
        {label: 'Gasoline', value: 'gasoline'},
        {label: 'Hybrid', value: 'hybrid'},
        {label: 'Diesel', value: 'diesel'}
    ];

    const colorOptions = [
        {label: 'Black', value: 'black'},
        {label: 'Nardo Grey', value: 'nardo grey'},
        {label: 'Nogaro Blue', value: 'nogaro blue'},
        {label: 'Yellow', value: 'yellow'}
    ];

    const rimsOptions = [
        {label: '18 Inch Rims', value: '18 inch rims'},
        {label: '19 Inch Rims', value: '19 inch rims'},
        {label: '20 Inch Rims', value: '20 inch rims'},
        {label: '21 Inch Rims', value: '21 inch rims'}
    ];

    const driveOptions = [
        {label: 'All Wheel Drive', value: 'all wheel drive'},
        {label: 'Rear Wheel Drive', value: 'rear wheel drive'},
        {label: 'Front Wheel Drive', value: 'front wheel drive'}
    ];

    const seatsOptions = [
        {label: 'Leather Interior', value: 'leather interior'},
        {label: 'Alcantara Interior', value: 'alcantara interior'},
        {label: 'Suede Interior', value: 'suede interior'}
    ];


    const onOrderSubmitHandler = (e) => {
        e.preventDefault();

        const {fuel, color, rims, drive, textarea, interior} = e.target;
        let imageUrl = car.imageUrl;
        let make = car.make;
        let model = car.model;

        console.log(uid);


        carsService.create(imageUrl, make, model, fuel.value, color.value, rims.value, drive.value, textarea.value, interior.value, uid)

        // const fuel = e.target.fuel.value;
        // const color = e.target.color.value;
        // const rims = e.target.rims.value;
        // const drive = e.target.drive.value;

        // const requestOptions = {
        //     method: 'POST',
        //     body: JSON.stringify({ fuel: e.target.fuel.value })
        // };
        // fetch('http://localhost:5000/orders', requestOptions)
        //     .then(response => response.json())
            
        // console.log(fuel);
        // console.log(color);
        // console.log(textarea);
        // console.log(rims);
        // console.log(drive);
    }

        return <div className={styles.car_detail}>
            
            <div className={styles.car_request}>
                <form onSubmit={onOrderSubmitHandler} className={styles.equipment_form}>
                    <p>{uid}</p>
                <div className={styles.car_details}>
                <article className={styles.details_article}>
                    <img className={styles.car_img} src={car.imageUrl} alt="" />
                    <h3>Make: <span>{car.make}</span></h3>
                    <h3>Model: <span>{car.model}</span></h3>
                    <p>Production Year: <span>{car.year}</span></p>
                </article>
            </div>
            <div className={styles.order_form}>
                    <h1>Place an order:</h1>
                        <label htmlFor="cars">Choose fuel type:</label>
                        <label htmlFor="cars">Choose desired color:</label><br/>
                    <select className={styles.seclect} id="fuel" name="fuel">
                        
                        {fuelOptions.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select>
                    
                    <select className={styles.seclect} id="color" name="color">
                        
                        {colorOptions.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select><br/>

                    <label htmlFor="cars">Choose rims size:</label><br/>
                    <select className={styles.seclect} id="rims" name="rims">
                        
                        {rimsOptions.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select><br />

                    <label htmlFor="cars">Choose drivetrain:</label>
                    <label htmlFor="cars">Choose Your Interior:</label><br/>
                    <select className={styles.seclect} id="drive" name="drive">
                        
                        {driveOptions.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select>       

                    
                    <select className={styles.seclect} id="interior" name="interior">
                        
                        {seatsOptions.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select><br /><br />   
        
                    <label htmlFor="cars">Enter additional preferences:</label><br />
                    <textarea className={styles.textarea} name="textarea" cols="60" rows="4"></textarea>
                    {/* <p><span className={styles.textarea} role="textbox"></span></p> */}
                    <input className={styles.order_btn} type="submit" value="Finish Order" />
                            </div>
                </form>
            </div>
        </div>
    
}

export default CarDetails