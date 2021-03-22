import { Component } from 'react';
import styles from './LoginRegister.module.css'

class LoginRegister extends Component {

    render() {
        return <div className={styles.login}>
            <div className={styles.upper_triangle}></div>
            <h2 className={styles.login_header}>Log in / Sign up</h2>
            <form className={styles.login_container}>
                <p><input type="email" placeholder="Email" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <p><input type="submit" value="Log in" /></p>
                <p><input type="submit" value="Sign up" /></p>
            </form>
        </div>
    }
}


export default LoginRegister