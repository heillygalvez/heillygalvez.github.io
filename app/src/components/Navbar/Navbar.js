import React from 'react'
import logo from "../../assets/yellow_logo.png"
import observable_logo from "../../assets/observable_logo.svg"
import linkedin_logo from "../../assets/linkedin_logo.svg"
import github_logo from "../../assets/github_logo.svg"
import styles from "./Navbar.module.scss"

export function Navbar() {
  return (
    <nav className={styles.navbar_wrapper}>
        <div className={styles.section_wrapper}>
            <div className={styles.logo_wrapper}>
                <img src={logo} alt='Heilly Galvez logo' />
            </div>
            <ul className={styles.link_wrapper}>
                <li><a href="https://www.observablehq.com/@heillygalvez"><img src={observable_logo} alt='Observable'/></a></li>
                <li><a href="http://www.linkedin.com/in/heillygalvez"><img src={linkedin_logo} alt='LinkedIn'/></a></li>
                <li><a href="https://github.com/heillygalvez"><img src={github_logo} alt='Github'/></a></li>
            </ul>
        </div>
    </nav>
  )
}
