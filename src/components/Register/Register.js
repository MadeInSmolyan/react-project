import { auth } from '../../utils/firebase';
import styles from './Register.module.css';

const Register = ({
    history
}) => {
    
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email);
        console.log(password);

        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('Register');
                history.push('/');
            })

    }


        return <div className={styles.login}>
        <div className={styles.upper_triangle}></div>
        <h2 className={styles.login_header}>Register</h2>
        <form onSubmit={onRegisterSubmitHandler} className={styles.login_container}>
            <p><input type="email" name="email" placeholder="Email" /></p>
            <p><input type="password" name="password" placeholder="Password" /></p>
            <p><input type="password" placeholder="Repeat Password" /></p>
                <p><input type="submit" value="Register" /></p>
            </form>
        </div>
    
}

export default Register;