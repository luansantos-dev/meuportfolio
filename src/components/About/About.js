import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${styles.about} container animeSection`}>
      <h1 className={styles.title}>Hey, I'm Luan 👋</h1>
      <p className={styles.subtitle}>
        Front-end Developer with 4+ years of Web Development experience and
        <strong> iOS Developer Student.</strong>
      </p>
      <p></p>
    </div>
  );
};

export default About;
