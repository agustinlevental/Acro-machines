import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({machine}) => {
  const firstBreack= 0.0;
  const secondBreack =0.1;
  const thirdBreack=0.2;
  const fourthBreack=0.35;
  const fifthBreack=0.5;
  const sixthBreack=1.0;

  const calidad = Math.floor((1 - machine.indicadores.calidad) * 100);


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
        return ''; 
    }
  };
  const getClassForCalidad = (calidad) => {
    console.log(calidad, "la calidad")
    switch (true) {
      case calidad === 100:
        return styles.firstBreack;
      case calidad > 80 && calidad < 95:
        return styles.moving;
      case calidad > 50 && calidad < 80:
        return styles.regularBreack;
      case calidad < 50:
        return styles.sixthBreack;
      default:
        return ''; 
    }
  };
  
  
  return (

    <div className={styles.card}>
      <div className={styles.statusAndName}>
        <div className={`${styles.status} ${machine.moving==true?styles.moving:styles.stoped}`}></div>
        <div className={styles.nameAndDetail}>
        Copy code
<Link to={`/machines/${machine.id}`} state={{ id: machine.id }}>
  <p>{`(${machine.id}) ${machine.description}`}</p>
</Link>
          <p><span className={styles['blue-text']}>{`${machine.company}`}</span></p>
        </div>
      </div>
      <div className={styles.indicadores}>
      {machine.type==="Pulverizadora"?(
        <div>
        <div className={styles.row}>
      
          <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.taponamiento)}`}>
        
            <div className={styles.indicadorName}>
              <p>Taponamiento</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{machine.indicadores.taponamiento} %</p>
            </div>

          </div>
         
         <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.evaporacion)}`}>
            <div className={styles.indicadorName}>
              <p>Evaporación</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{machine.indicadores.evaporacion} %</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
        <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.deriva)}`}>
            <div className={styles.indicadorName}>
            <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Perdida p. viento</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{machine.indicadores.deriva} %</p>
            </div>
          </div>
          <div className={`${styles.rectangle} ${getClassForCalidad(calidad)}`}>
            <div className={styles.indicadorName}>
              <p>Calidad</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{calidad} %</p>
            </div>
          </div>
        </div>
         </div>):
         
         
         
         <div> 
         <div className={styles.row}>
      
         <div className={`${styles.rectangle} `}>
       
           <div className={styles.indicadorName}>
             <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Tipo de cultivo</p>
           </div>
           <div className={styles.indicadorValue}>
             <p className={styles.valueBold}>{machine.indicadores.cultivo}</p>
           </div>

         </div>
        
        <div className={`${styles.rectangle} `}>
           <div className={styles.indicadorName}>
             <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Humedad grano</p>
           </div>
           <div className={styles.indicadorValue}>
           <p className={styles.valueBold}>{machine.indicadores.humedad_grano} %</p>
           </div>
         </div>
       </div>
       <div className={styles.row}>
       <div className={`${styles.rectangle} ${styles.moving}`}>
           <div className={styles.indicadorName}>
           <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Rinde húmedo</p>
           </div>
           <div className={styles.indicadorValue}>
           <p className={styles.valueBold}>{machine.indicadores.rinde_humedo} </p>
           </div>
         </div>
         <div className={`${styles.rectangle} ${styles.rindeSeco} `}>
           <div className={styles.indicadorName}>
           <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Rinde seco</p>
           </div>
           <div className={styles.indicadorValue}>
           <p className={styles.valueBold}>{machine.indicadores.rinde_humedo}</p>
           </div>
         </div>
       </div>
       </div>
         
         
         
         
         }
      </div>
    </div>
   
  );
};

export default Card;
