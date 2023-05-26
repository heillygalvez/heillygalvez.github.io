import React from 'react'
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
