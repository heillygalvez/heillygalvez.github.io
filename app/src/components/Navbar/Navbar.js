import React from 'react'
import logo from "../../assets/yellow_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from "./Navbar.module.scss"

export function Navbar() {
  return (
    <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
            <img src={logo} alt='Heilly Galvez logo' />
        </div>
        <div className={styles.link_wrapper}>
            <ul className={styles.link_list}>
                <li><FontAwesomeIcon icon={icon({name: 'linkedin'})} /></li>
                <li><a href="http://www.linkedin.com/in/heillygalvez" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/heillygalvez" class="icon brands fa-twitter"><span class="label">Github</span></a></li>
            </ul>
        </div>
    </div>
  )
}
