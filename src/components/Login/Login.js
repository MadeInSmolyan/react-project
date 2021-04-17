import styles from './Login.module.css';
import {auth} from '../../utils/firebase';

const Login = () => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email);
        console.log(password);


        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })

    }


        return <div className={styles.login}>
            <div className={styles.upper_triangle}></div>
            <h2 className={styles.login_header}>Log in</h2>
            <form className={styles.login_container} onSubmit={onLoginFormSubmitHandler}>
                <p><input name='email' type="email" placeholder="Email" /></p>
                <p><input name='password' type="password" placeholder="Password" /></p>
                <p><input type="submit" value="Log in" /></p>
            </form>
        </div>
    
}

export default Login