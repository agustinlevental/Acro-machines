
import styles from './MachineDescription.module.css';
import cardStyles from "../card/card.module.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { getClassByValue,getClassForCalidad } from '../card/card';


const MachineDescription = () => {
  const id = 2;
const [data,setData] =useState("");
const [formattedDate, setFormattedDate] = useState("");
const [calidad,setCalidad]=useState(0);
const firstBreack= 0.0;
  const secondBreack =0.1;
  const thirdBreack=0.2;
  const fourthBreack=0.35;
  const fifthBreack=0.5;
  const sixthBreack=1.0;


useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://wrk.acronex.com/api/challenge/machines/${id}`);
        setData(response.data);
        const calidad = data.data.indicadores.calidad
        ? Math.floor((1 - data.data.indicadores.calidad) * 100)
        : 0;

      setCalidad(calidad);
console.log(data, "la data")
console.log(data.data.indicadores.calidad, "probando calidad")
console.log(calidad, "la autentica calidad")
        const rawDate = new Date(data.last_update);
        const formatted = format(rawDate, 'dd/MM/yyyy HH:mm:ss');
        setFormattedDate(formatted);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  
}, []);

const getClassByValue = (value) => {
  switch (true) {
    case value === firstBreack:
      return cardStyles.firstBreack;
    case value > firstBreack && value <= secondBreack:
      return cardStyles.secondBreack;
    case value > secondBreack && value <= thirdBreack:
      return cardStyles.thirdBreack;
    case value > thirdBreack && value <= fourthBreack:
      return cardStyles.fourthBreack;
    case value > fourthBreack && value <= fifthBreack:
      return cardStyles.fifthBreack;
    case value > fifthBreack && value <= sixthBreack:
      return cardStyles.sixthBreack;
    default:
      return '';
  }
};
const getClassForCalidad = (calidad) => {
  console.log(calidad, "entro la calidad")
  switch (true) {
    case calidad === 100:
      return cardStyles.firstBreack;
    case calidad > 80 && calidad < 95:
      return cardStyles.moving;
    case calidad > 50 && calidad < 80:
      return cardStyles.regularBreack;
    case calidad < 50:
      return cardStyles.sixthBreack;
    default:
      return '';
  }
};


  return (
    <div className={styles.center}>
      <div className={styles.machineContainer}>
        <div className={styles.titleAndNumber}>
          <div className={styles.title}>
            <p>Pulverizadora - Demo Salta</p>
          </div>
          <div className={styles.number}>
            <p style={{color:"#706f6f"}}>383</p>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.leftInformation}>





          <div className={styles.indicadores}>
      {data.class==="Pulverizadora"?(
        <div>
        <div className={cardStyles.row}>

          <div className={`${styles.rectangle} ${getClassByValue(
            data.data.indicadores.taponamiento
            )}`}>

            <div className={cardStyles.indicadorName}>
              <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Taponamiento</p>
            </div>
            <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>{
            data.data.indicadores.taponamiento
            } %</p>
            </div>

          </div>

         <div className={`${styles.rectangle} ${getClassByValue(
          data.data.indicadores.evaporacion
          )}`}>
            <div className={cardStyles.indicadorName}>
              <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Evaporación</p>
            </div>
            <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}> {
            data.data.indicadores.evaporacion
          }%</p>
            </div>
          </div>
        </div>
        <div className={cardStyles.row}>
        <div className={`${styles.rectangle} ${getClassByValue(
          data.data.indicadores.deriva
          )}`}>
            <div className={cardStyles.indicadorName}>
            <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Perdida p. viento</p>
            </div>
            <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}> {
            data.data.indicadores.deriva
            }
            %</p>
            </div>
          </div>
          <div className={`${styles.rectangle} ${getClassForCalidad(calidad)}`}>
            <div className={cardStyles.indicadorName}>
              <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Calidad</p>
            </div>
            <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}> 
            {calidad}
            %</p>
            </div>
          </div>
        </div>
         </div>):
         <div>
         <div className={cardStyles.row}>

         <div className={`${styles.rectangle} `}>

           <div className={cardStyles.indicadorName}>
             <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Tipo de cultivo</p>
           </div>
           <div className={cardStyles.indicadorValue}>
             <p className={cardStyles.valueBold}></p>
           </div>

         </div>

        <div className={`${styles.rectangle} `}>
           <div className={cardStyles.indicadorName}>
             <p style={{ cardStyles: '12px', whiteSpace: 'nowrap' }}>Humedad grano</p>
           </div>
           <div className={cardStyles.indicadorValue}>
           <p className={cardStyles.valueBold}> %</p>
           </div>
         </div>
       </div>
       <div className={cardStyles.row}>
       <div className={`${styles.rectangle} ${cardStyles.moving}`}>
           <div className={cardStyles.indicadorName}>
           <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Rinde húmedo</p>
           </div>
           <div className={cardStyles.indicadorValue}>
           <p className={cardStyles.valueBold}></p>
           </div>
         </div>
         <div className={`${styles.rectangle} ${styles.rindeSeco} `}>
           <div className={cardStyles.indicadorName}>
           <p style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Rinde seco</p>
           </div>
           <div className={cardStyles.indicadorValue}>
           <p className={cardStyles.valueBold}></p>
           </div>
         </div>
       </div>
       </div>

         }
      </div>












            <div className={styles.leftSimpleInformation}>
                <div className={styles.textSeparation}>
              <p className={styles.boldText}>Empresa</p>
              </div>
              <div className={styles.textSeparation}>
              <p className={styles.blueText}>{data.company}</p>
              </div>
              <div className={styles.textSeparation}>
              <p className={styles.boldText}>Clase</p>
              </div>
              <div className={styles.textSeparation}>
              <p>{data.class}</p>
              </div>
              <div className={styles.textSeparation}>
              <p className={styles.boldText}>Estado</p>
              </div>
              <div className={styles.textSeparation}>
              <p>{`${data.moving?"En movimiento":"parado"}`}</p>
              </div>
              <div className={styles.textSeparation}>
              <p className={styles.boldText}>Última actualización</p>
              </div>
              <div className={styles.textSeparation}>
              <p>{formattedDate}</p>
              </div>
            </div>
          </div>
          <div className={styles.rigthInformation}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th colSpan="2" className={styles.tableTitle}>
                    General
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cosechando</td>
                  <td>{data.working?"si":"no"}</td>
                </tr>
                <tr>
                  <td>Batería interna</td>
                  <td>{data.data.general["batería interna"]}</td>
                </tr>
                <tr>
                  <td>Batería vehículo</td>
                  <td>{data.data.general["batería vehiculo"]}</td>
                </tr>
                <tr>
                  <td>Uso combustible</td>
                  <td>Dato no encontrado en la API</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th colSpan="2" className={styles.tableTitle}>
                    Clima
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temperatura</td>
                  <td>{data.data.clima.temperatura}</td>
                </tr>
                <tr>
                  <td>Humedad</td>
                  <td>{data.data.clima.humedad}</td>
                </tr>
                <tr>
                  <td>Dirección del viento</td>
                  <td>{data.data.clima["direccion viento"]}</td>
                </tr>
                <tr>
                  <td>Velocidad del viento</td>
                  <td>{data.data.clima["velocidad viento"]}</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th colSpan="2" className={styles.tableTitle}>
                    Operación
                  </th>



                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Velocidad</td>
                  <td>{data.data.operación.velocidad}</td>
                </tr>
                <tr>
                  <td>Presión</td>
                  <td>{data.data.operación.presión}</td>
                </tr>
                <tr>
                  <td>Producto / hectárea</td>
                  <td>{data.data.operación["producto / hectarea"]}</td>
                </tr>
                <tr>
                  <td>Ancho</td>
                  <td>{data.data.general.ancho}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDescription;
