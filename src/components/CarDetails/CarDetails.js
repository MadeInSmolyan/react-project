import { Component } from 'react';
import styles from './CarDetails.module.css'

const CarDetails = () => {
        return <div class={styles.car_detail}>
            <div>
                <article class={styles.details_article}>
                    <img class={styles.car_img} src="https://s1.cdn.autoevolution.com/images/models/AUDI_A3-Sportback-2020_main.jpg"
                        alt="" />
                    <h3>Topic: <span>Stacks and Queues</span></h3>
                    <p>Category: <span>JAVA</span></p>
                </article>
            </div>
            <div className={styles.car_request}>
                <form className={styles.equipment_form}>
                    <h2>Place an order:</h2>
                    <label for="cars">Choose fuel type:</label><br />
                    <select className={styles.seclect} id="cars" name="cars">
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="diesel">Hybrid</option>
                        <option value="electrical">Electrical</option>
                    </select><br /><br />
                    <label for="cars">Choose extra equipment:</label><br />

                    <div className={styles.checkbox}>

                        <label for="x"><input type="checkbox" /> <span>Label text x</span></label>
                        <label for="y"><input type="checkbox" /> <span>Label text y</span></label>
                        <label for="z"><input type="checkbox" /> <span>Label text z</span></label><br />
                        <label for="x"><input type="checkbox" /> <span>Label text x</span></label>
                        <label for="y"><input type="checkbox" /> <span>Label text y</span></label>
                        <label for="z"><input type="checkbox" /> <span>Label text z</span></label><br />
                        <label for="x"><input type="checkbox" /> <span>Label text x</span></label>
                        <label for="y"><input type="checkbox" /> <span>Label text y</span></label>
                        <label for="z"><input type="checkbox" /> <span>Label text z</span></label><br />

                    </div>
                    <label for="cars">Enter additional preferences:</label><br />
                    <p><span className={styles.textarea} role="textbox" contenteditable></span></p>
                    <input className={styles.order_btn} type="submit" value="Finish Order" />

                </form>
            </div>
        </div>
    
}

export default CarDetails