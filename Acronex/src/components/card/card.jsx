import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.statusAndName}>
        <div className={styles.status}></div>
        <div className={styles.nameAndDetail}>
          <p>(1243) Pulverizadora - Demo Saltar <span className={styles['blue-text']}>PLA S.A</span></p>
        </div>
      </div>
      <div className={styles.indicadores}>
        <div className={styles.row}>
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Temperatura</p>
            </div>
            <div className={styles.indicadorValue}>
              <p>4%</p>
            </div>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Indicador 2</p>
            </div>
            <div className={styles.indicadorValue}>
              <p>8%</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Indicador 3</p>
            </div>
            <div className={styles.indicadorValue}>
              <p>12%</p>
            </div>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Indicador 4</p>
            </div>
            <div className={styles.indicadorValue}>
              <p>16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
