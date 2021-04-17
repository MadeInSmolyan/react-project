import { Component } from 'react';
import styles from './Header.module.css'
import {Link} from 'react-router-dom';


const Header = () => {
        return <header>
            {/* <h1><a class={styles.home_header} href="#/home">SoftWiki</a></h1> */}
            <Link class={styles.home_header} to="/"><img src="/car-png.webp" alt="logo" /></Link>
            <nav class={styles.nav_buttons}>

                <Link to="/logout">Logout</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                           
            </nav>
        </header>
    }


export default Header