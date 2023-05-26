import React from 'react'
import headshot from "../../assets/headshot.png"
import { PROJECTS } from "./data"
import Lottie from 'react-lottie';
import * as animationData from '../../assets/mail_lottie.json'
import styles from "./Main.module.scss"

export function Main() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
  return (
    <div className={styles.main_wrapper}>
        <section className={styles.banner}>
            <div className={styles.section_wrapper}>
                <div className={styles.content}>
                    <h1>Hi, I'm Heilly</h1>
                    <h2>Data viz designer and software engineer</h2>
                    <p>I use JavaScript and Python to build interactive web tools that make data and the learnings from analyzing it accessible to both technical and non-technical audiences.</p>
                    <p>From surveys to time-series to the output of machine learning models, I'm passionate about turning information into actionable insights.</p>
                </div>
            <div className={styles.image_container}>
                <img src={headshot} alt='Heilly Galvez'/>
            </div>
            </div>
        </section>
        <section className={styles.work}>
            <div className={styles.section_wrapper}>
                <div className={styles.content}>
                    <h1>My work</h1>
                    <h2>A few of my most recent data viz and front-end projects</h2>
                </div>
                <div className={styles.projects_container}>
                    {PROJECTS.map((d, i) => <div key={`project_${i}`} className={styles.project}>
                        <img src={d.imageURL} alt={`Thumbnail for ${d.title}`} />
                        <div className={styles.project_title}>{d.title}</div>
                        <div className={styles.project_description}>{d.description}</div>
                    </div>)}
                </div>
            </div>
        </section>
        <section className={styles.contact}>
            <div className={styles.section_wrapper}>
                <div className={styles.image_container}>
                <   Lottie options={defaultOptions} width={'5em'} height={'6em'}/>
                </div>
                <div className={styles.content}>
                    <h1>Contact me</h1>
                    <p>For work opportunities, collaborations, or anything data viz-related, please email me at heillygalvez@gmail.com.</p>
                </div>
            </div>
        </section>    
    </div>
  )
}
