import React from 'react'
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
