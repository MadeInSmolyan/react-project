import { Component } from 'react';
import styles from './Profile.module.css'

const Profile = () => {
        return <div class={styles.user_profile}>

            <img id={styles.user_avatar_url} src="../public/female.png" alt="user-profile" />
            <h1>user</h1>
            <h2>user@abv.bg</h2>

            <p id={styles.user_listings_title}>Your Orders:</p>

            <div className={styles.home_page}>
                <div className={styles.each_card}>
                    <article className={styles.catalog_article}>
                        <h3>Topic: <span>Arrays</span></h3>
                        <p>Category: <span>Javascript</span></p>
                        <img className={styles.catalog_img} src="data:image/jpeg;base64,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"
                            alt="as" />
                        <button className={styles.profile_btn} type="button">Edit Order</button>
                        <button className={styles.profile_btn} type="button">Cancel Order</button>
                    </article>
                </div>
            </div>
        </div>
    
}

export default Profile