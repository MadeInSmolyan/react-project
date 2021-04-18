import firebase from '../../utils/firebase'
import React,{useContext} from 'react'
import { useEffect } from 'react';
import styles from './Header.module.css'
import {Link} from 'react-router-dom';


const Header = ({
    email,
    isAuthenticated
}) => {

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

        return <div> 
        <form> 
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
    }


export default Header