import React from 'react'
import CustomSelect from '../../CustomSelect/CustomSelect'
import styles from './Navbar.module.scss'

const Navbar= () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={'./img/homepage/rzt-logo.svg'} />
            </div>
            <div className={styles.navLinksContainer}>
                <ul className={styles.navLinks}>
                    <CustomSelect>RZT Platform</CustomSelect>
                    <CustomSelect>Resources</CustomSelect>
                    <CustomSelect>Industries</CustomSelect>
                    <li>About Us</li>
                    <li className={styles.signUpButton}>Signup</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
