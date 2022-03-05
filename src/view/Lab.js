import React from "react";
import styles from "./Lab.module.css";

const Lab = () => {
  return (
    <article className={`${styles.article} animeSection`}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Countries Rest com Vue 3</h1>
            <span>
              <ion-icon name="logo-github"></ion-icon>
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
          </div>

          <div className={styles.title}>
            <p>Consumindo Rest API com Composition API e Vuex.</p>
            <ul>
              <li>
                <ion-icon name="logo-vue"></ion-icon>
                <span>vuejs</span>
              </li>
              <li>
                <ion-icon name="logo-sass"></ion-icon>
                <span>vuejs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Lab;
