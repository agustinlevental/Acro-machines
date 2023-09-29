import styles from './Card.module.css';

const Card = ({machine}) => {
  const firstBreack= 0.0;
  const secondBreack =0.1;
  const thirdBreack=0.2;
  const fourthBreack=0.35;
  const fifthBreack=0.5;
  const sixthBreack=1.0;

const calidad = (1-machine.indicadores.calidad)*100 ;

  const getClassByValue = (value) => {
    switch (true) {
      case value === firstBreack:
        return styles.firstBreack;
      case value > firstBreack && value <= secondBreack:
        return styles.secondBreack;
      case value > secondBreack && value <= thirdBreack:
        return styles.thirdBreack;
      case value > thirdBreack && value <= fourthBreack:
        return styles.fourthBreack;
      case value > fourthBreack && value <= fifthBreack:
        return styles.fifthBreack;
      case value > fifthBreack && value <= sixthBreack:
        return styles.sixthBreack;
      default:
        return ''; // Si no coincide con ninguno, devuelve una cadena vacía
    }
  };
  const getClassForCalidad = (calidad) => {
console.log(calidad, "la calidad")
    switch (true) {
      case calidad < 50:
        return styles.sixthBreack;
      case calidad > 50 && calidad < 80:
        return styles.regularBreack;
      case calidad > 80 && calidad < 95:
        return styles.moving;
      case calidad === 100:
        return styles.firstBreack;
      default:
        return ''; 
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.statusAndName}>
        <div className={`${styles.status} ${machine.moving==true?styles.moving:styles.stoped}`}></div>
        <div className={styles.nameAndDetail}>
          <p>{`(${machine.id}) ${machine.description}`}</p>
          <p><span className={styles['blue-text']}>{`${machine.company}`}</span></p>
        </div>
      </div>
      <div className={styles.indicadores}>
   
        <div className={styles.row}>
        {machine.type==="Pulverizadora"?(
          <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.taponamiento)}`}>
        
            <div className={styles.indicadorName}>
              <p>Taponamiento</p>
            </div>
            <div className={styles.indicadorValue}>
              <p>{machine.indicadores.taponamiento} %</p>
            </div>

          </div>
          ):null}
         <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.evaporacion)}`}>
            <div className={styles.indicadorName}>
              <p>Evaporación</p>
            </div>
            <div className={styles.indicadorValue}>
            <p>{machine.indicadores.evaporacion} %</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
        <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.deriva)}`}>
            <div className={styles.indicadorName}>
            <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Perdida p. viento</p>
            </div>
            <div className={styles.indicadorValue}>
            <p>{machine.indicadores.deriva} %</p>
            </div>
          </div>
          <div className={`${styles.rectangle} ${getClassForCalidad(calidad)}`}>
            <div className={styles.indicadorName}>
              <p>Calidad</p>
            </div>
            <div className={styles.indicadorValue}>
            <p>{calidad} %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
