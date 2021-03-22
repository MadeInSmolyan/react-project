import { Component } from 'react';
import styles from './Header.module.css'

class Header extends Component {

    render() {
        return <header>
            <h1><a class={styles.home_header} href="#/home">SoftWiki</a></h1>
            <nav class={styles.nav_buttons}>
                <a href="#/categories">Categories</a>
                <a href="#/create">Create</a>
                <a href="#/logout">Logout</a>
                <a href="#/login">Login</a>
                <a href="#/register">Register</a>
            </nav>
        </header>
    }
}

export default Header