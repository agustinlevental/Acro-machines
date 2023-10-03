import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useEffect } from 'react';
import { getClassByValue,getClassForCalidad } from '../../functions/functions'; 

const Card = ({ machine }) => {
  useEffect(() => {
    console.log(machine, "esto trae la card");
  }, [machine]);

  const isObject = typeof machine === 'object';

  const machines = isObject ? [machine] : machine;

  console.log(machines, "machines");

  return (
    <div className={styles.card}>
      {machines.map((machineItem) => (
        <div key={machineItem.id} className={styles.statusAndName}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              className={`${styles.status} ${machineItem.moving == true ? styles.moving : styles.stoped}`}
            ></div>
          </div>
          <div className={styles.nameAndDetail}>
            <Link
              to={`/machines/${machineItem.id}`}
              state={{ id: machineItem.id }}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <p className={`${styles.truncateText}`}>{`(${machineItem.id}) ${machineItem.description}`}</p>
            </Link>
            <p>
              <span className={styles['blue-text']}>{`${machineItem.company}`}</span>
            </p>
          </div>
        </div>
      ))}
      {machines.map((machineItem) => (
        <div key={machineItem.id} className={styles.indicadores}>
          {machineItem.type === 'Pulverizadora' || machineItem.class === 'Pulverizadora' ? (
            <div>
              <div className={styles.row}>
                <div className={`${styles.rectangle} ${getClassByValue(machineItem?.indicadores?.taponamiento || machineItem.data?.indicadores?.taponamiento)}`}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitle}>Taponamiento</p>
                  </div>
                  <div className={styles.indicadorValue}>
                    <p className={styles.valueBold}>{Math.floor((Math.abs(machineItem?.indicadores?.taponamiento || machineItem.data?.indicadores?.taponamiento)) * 100)} %</p>
                  </div>
                </div>
                <div className={`${styles.rectangle} ${getClassByValue(machineItem?.indicadores?.evaporacion || machineItem.data?.indicadores?.evaporacion)} `}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitle}>Evaporación</p>
                  </div>
                  <div className={styles.indicadorValue}>
                  <p className={styles.valueBold}>
  {Math.floor((Math.abs(machineItem?.indicadores?.evaporacion || machineItem.data?.indicadores?.evaporacion) * 100))} %
</p>

                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.rectangle}  ${getClassByValue(machineItem?.indicadores?.deriva || machineItem.data?.indicadores?.deriva)}`}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitle}>Perdida p. viento</p>
                  </div>
                  <div className={styles.indicadorValue}>
                    <p className={styles.valueBold}>{Math.floor((Math.abs(machineItem?.indicadores?.deriva || machineItem.data?.indicadores?.deriva)) * 100)} %</p>
                  </div>
                </div>
                <div className={`${styles.rectangle} ${getClassForCalidad((1 - machineItem?.indicadores?.calidad||machineItem.data?.indicadores?.calidad) * 100)}`}>
                  <div className={styles.indicadorName}>
                    <p className={`${styles.cardTitle} ${(1 - machineItem?.indicadores?.calidad) * 100 < 100 ? styles.blackCalidad : ''}`}>Calidad</p>
                  </div>
                  <div className={styles.indicadorValue}>
                  <p className={`${styles.valueBold} ${(1 - machineItem?.indicadores?.calidad) * 100 < 100 ? styles.blackCalidad : ''}`} >
  {Math.floor((1-machineItem?.indicadores?.calidad||machineItem.data?.indicadores?.calidad) * 100)}
</p>


                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.row}>
                <div className={styles.rectangle}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitleCosechadora}>Tipo de cultivo</p>
                  </div>
                  <div className={styles.indicadorValue}>
                    <p className={styles.valueBoldCosechadora}>{machineItem?.indicadores?.cultivo||machineItem?.data?.indicadores?.cultivo}</p>
                  </div>
                </div>
                <div className={styles.rectangle}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitleCosechadora}>Humedad grano</p>
                  </div>
                  <div className={styles.indicadorValue}>
                    <p className={styles.valueBoldCosechadora}>{Math.floor(machineItem?.indicadores?.humedad_grano||machineItem?.data?.indicadores?.humedad_grano)} %</p>
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.rectangle} ${styles.moving}`}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitle}>Rinde húmedo</p>
                  </div>
                  <div className={styles.indicadorValue}>
                    <p className={styles.valueBold}>{machineItem?.indicadores?.rinde_humedo||machineItem?.data?.indicadores?.rinde_humedo}</p>
                  </div>
                </div>
                <div className={`${styles.rectangle} ${styles.rindeSeco} `}>
                  <div className={styles.indicadorName}>
                    <p className={styles.cardTitleCosechadora}>Rinde seco</p>
                  </div>
                  <div className={styles.indicadorValue}>
                    <p className={styles.valueBoldCosechadora}>{machineItem?.indicadores?.rinde_seco||machineItem?.data?.indicadores?.rinde_seco}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;