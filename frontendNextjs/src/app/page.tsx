import React from 'react';
import styles from './Home.module.css'; // Import the CSS module

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/mountain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <p>Hi, You Are Watching Junaidh's Channel.</p>
      </div>
    </div>
  );
}
