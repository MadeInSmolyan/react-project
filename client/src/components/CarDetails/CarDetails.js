import {useEffect, useState} from 'react';
import * as carsService from '../../services/carsService'
import styles from './CarDetails.module.css'

const CarDetails = ({
    match
}) => {



    let [car, setCar] = useState({});

    useEffect(() => {
        carsService.getOne.match.params.id
        .then(res => setCar(res))
    }, [match]);

    const options = [
        {label: 'Petrol', value: 'petrol'},
        {label: 'Gasoline', value: 'gasoline'},
        {label: 'Hybrid', value: 'hybrid'},
        {label: 'Diesel', value: 'diesel'}
    ]

        return <div className={styles.car_detail}>
            <div>
                <article className={styles.details_article}>
                    <img className={styles.car_img} src="{car.imageUrl}" alt="" />
                    <h3>Make: <span></span></h3>
                    <p>Model: <span></span></p>
                    <p>Production Year: <span></span></p>
                </article>
            </div>
            <div className={styles.car_request}>
                <form className={styles.equipment_form}>
                    <h1>Place an order:</h1>
                    <label htmlFor="cars">Choose fuel type:</label><br />
                    <select className={styles.seclect} id="cars" name="cars">
                        
                        {options.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select><br /><br />
                    <label htmlFor="cars">Choose extra equipment:</label><br />

                    <div className={styles.checkbox}>

                        <label htmlFor="x"><input type="checkbox" /> <span>Heated Seats</span></label>
                        <label htmlFor="y"><input type="checkbox" /> <span>Panorama Roof</span></label>
                        <label htmlFor="z"><input type="checkbox" /> <span>Xenon Headlights</span></label><br />
                        <label htmlFor="x"><input type="checkbox" /> <span>Bags Suspension</span></label>
                        <label htmlFor="y"><input type="checkbox" /> <span>Auto Start Stop</span></label><br />
                        <label htmlFor="z"><input type="checkbox" /> <span>ISOFIX</span></label>
                        <label htmlFor="x"><input type="checkbox" /> <span>Multi Steering Wheel</span></label>
                        <label htmlFor="y"><input type="checkbox" /> <span>Navigation</span></label><br />
                        <label htmlFor="z"><input type="checkbox" /> <span>Sport Rims</span></label>
                        <label htmlFor="z"><input type="checkbox" /> <span>Spoiler</span></label><br />
                        <label htmlFor="y"><input type="checkbox" /> <span>Sliding Roof</span></label>
                        <label htmlFor="z"><input type="checkbox" /> <span>All Wheel Drive</span></label>
                        <label htmlFor="x"><input type="checkbox" /> <span>Stage 1 Tuning</span></label>

                    </div>
                    <label htmlFor="cars">Enter additional preferences:</label><br />
                    <p><span className={styles.textarea} role="textbox" contenteeditable></span></p>
                    <input className={styles.order_btn} type="submit" value="Finish Order" />

                </form>
            </div>
        </div>
    
}

export default CarDetails