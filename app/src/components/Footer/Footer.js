import React from 'react'
import logo from "../../assets/purple_logo.png"
import styles from "./Footer.module.scss"

export function Footer() {
  return (
    <section className={styles.footer_wrapper}>
      <div className={styles.section_wrapper}>
        <img src={logo} alt='Logo in purple'/>
        <span>Heilly Gálvez &copy; 2023.</span>
      </div>
    </section>
  )
}
