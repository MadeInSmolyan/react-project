import { Component } from 'react'
import styles from './Catalog.module.css'
import EachCard from "./EachCard/EachCard";

const Catalog = () => {
        return <div>
            <h1 className={styles.available}>Cars to Offer:</h1>
            <div className={styles.home_page}>
                
                <EachCard />
                
            </div>
        </div>
    }


export default Catalog