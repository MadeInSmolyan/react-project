import styles from './Login.module.css'

const Login = () => {
        return <div className={styles.login}>
            <div className={styles.upper_triangle}></div>
            <h2 className={styles.login_header}>Log in</h2>
            <form className={styles.login_container}>
                <p><input type="email" placeholder="Email" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <p><input type="submit" value="Log in" /></p>
            </form>
        </div>
    
}


export default Login