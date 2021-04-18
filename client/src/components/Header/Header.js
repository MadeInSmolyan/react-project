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

        console.log(uid);

        return <header>
            {/* <h1><a class={styles.home_header} href="#/home">SoftWiki</a></h1> */}
            <Link className={styles.home_header} to="/"><img src="/car-png.webp" alt="logo" /></Link>
            
                    {isAuthenticated
                    ? <p>Welcome, {email}!</p>
                    : <p>Welcome, Guest!</p>
                    }
                
            <nav className={styles.nav_buttons}>
            

            {isAuthenticated
                    ? <Link to="/logout">Logout</Link>
                    : <Link to="/register">Register</Link>
                    }

            {isAuthenticated
                    ? <Link to={`/profile/${uid}`}>Profile</Link>
                    : <Link to="/login">Login</Link>
                    }
                    <Link to="/catalog">Catalog</Link>
                           
            </nav>
        </header>
    }


export default Header