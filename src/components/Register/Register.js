import { Component } from 'react';
import styles from './Register.module.css'

const Register = () => {
        return <div className={styles.login}>
            <div className={styles.upper_triangle}></div>
            <h2 className={styles.login_header}>Register</h2>
            <form className={styles.login_container}>
                <p><input type="email" placeholder="Email" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <p><input type="rePassword" placeholder="Repeat Password" /></p>
                <p><input type="submit" value="Register" /></p>
            </form>
        </div>
    
}


export default Register