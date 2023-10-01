import { Link } from 'react-router-dom';
import styles from './Card.module.css';
const firstBreack= 0.0;
  const secondBreack =0.1;
  const thirdBreack=0.2;
  const fourthBreack=0.35;
  const fifthBreack=0.5;
  const sixthBreack=1.0;
  
export const getClassByValue = (value) => {
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

export const getClassForCalidad = (calidad) => {

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
const Card = ({machine}) => {
  
  const firstBreack= 0.0;
  const secondBreack =0.1;
  const thirdBreack=0.2;
  const fourthBreack=0.35;
  const fifthBreack=0.5;
  const sixthBreack=1.0;

  const calidad = Math.floor((1 - machine.indicadores.calidad) * 100);

  return (

    <div className={styles.card}>
      <div className={styles.statusAndName}>
        <div style={{display:"flex",alignItems: "center",justifyContent: "center"}}>
        <div className={`${styles.status} ${machine.moving==true?styles.moving:styles.stoped}`}></div>
        </div>
        <div className={styles.nameAndDetail}>
    
<Link to={`/machines/${machine.id}`} state={{ id: machine.id }}   style={{ textDecoration: 'none', color: 'black' }}>
  <p className={`${styles.truncateText}`}>{`(${machine.id}) ${machine.description}`}</p>
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
              <p className={styles.cardTitle}>Taponamiento</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{Math.floor(machine.indicadores.taponamiento*100)} %</p>
            </div>

          </div>
         
         <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.evaporacion)}`}>
            <div className={styles.indicadorName}>
              <p className={styles.cardTitle}>Evaporación</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{Math.floor(machine.indicadores.evaporacion*100)} %</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
        <div className={`${styles.rectangle} ${getClassByValue(machine.indicadores.deriva)}`}>
            <div className={styles.indicadorName}>
            <p className={styles.cardTitle} >Perdida p. viento</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={styles.valueBold}>{Math.floor(machine.indicadores.deriva*100)} %</p>
            </div>
          </div>
          <div className={`${styles.rectangle} ${getClassForCalidad(calidad)}`}>
            <div className={styles.indicadorName}>
              <p className={`${styles.cardTitle} ${calidad < 100 ? styles.blackCalidad : ""}`}>Calidad</p>
            </div>
            <div className={styles.indicadorValue}>
            <p className={`${styles.valueBold} ${calidad < 100 ? styles.blackCalidad : ""}`}>{calidad} %</p>
            </div>
          </div>
        </div>
         </div>):
         <div> 
         <div className={styles.row}>
      
         <div className={`${styles.rectangle} `}>
       
           <div className={styles.indicadorName}>
             <p className={styles.cardTitleCosechadora}>Tipo de cultivo</p>
           </div>
           <div className={styles.indicadorValue}>
             <p className={styles.valueBoldCosechadora}>{machine.indicadores.cultivo}</p>
           </div>

         </div>
        
        <div className={`${styles.rectangle} `}>
           <div className={styles.indicadorName}>
             <p className={styles.cardTitleCosechadora}>Humedad grano</p>
           </div>
           <div className={styles.indicadorValue}>
           <p className={styles.valueBoldCosechadora}>{machine.indicadores.humedad_grano} %</p>
           </div>
         </div>
       </div>
       <div className={styles.row}>
       <div className={`${styles.rectangle} ${styles.moving}`}>
           <div className={styles.indicadorName}>
           <p className={styles.cardTitle}>Rinde húmedo</p>
           </div>
           <div className={styles.indicadorValue}>
           <p className={styles.valueBold}>{machine.indicadores.rinde_humedo} </p>
           </div>
         </div>
         <div className={`${styles.rectangle} ${styles.rindeSeco} `}>
           <div className={styles.indicadorName}>
           <p className={styles.cardTitleCosechadora}>Rinde seco</p>
           </div>
           <div className={styles.indicadorValue}>
           <p className={styles.valueBoldCosechadora}>{machine.indicadores.rinde_humedo}</p>
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

