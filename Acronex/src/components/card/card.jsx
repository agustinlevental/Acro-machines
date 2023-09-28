import styles from './Card.module.css';

const Card = ({machine}) => {
  return (
    <div className={styles.card}>
      <div className={styles.statusAndName}>
        <div className={styles.status}></div>
        <div className={styles.nameAndDetail}>
          <p>{`(${machine.chassis}) ${machine.description}`}</p>
          <p><span className={styles['blue-text']}>{`${machine.company}`}</span></p>
        </div>
      </div>
      <div className={styles.indicadores}>
   
        <div className={styles.row}>
        {machine.type==="Pulverizadora"?(
          <div className={styles.rectangle}>
        
            <div className={styles.indicadorName}>
              <p>Taponamiento</p>
            </div>
            <div className={styles.indicadorValue}>
              <p>{machine.indicadores.taponamiento} %</p>
            </div>

          </div>
          ):null}
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Evaporación</p>
            </div>
            <div className={styles.indicadorValue}>
            <p>{machine.indicadores.evaporacion} %</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Perdida p. viento</p>
            </div>
            <div className={styles.indicadorValue}>
            <p>{machine.indicadores.deriva} %</p>
            </div>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.indicadorName}>
              <p>Calidad</p>
            </div>
            <div className={styles.indicadorValue}>
            <p>{machine.indicadores.calidad} %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
