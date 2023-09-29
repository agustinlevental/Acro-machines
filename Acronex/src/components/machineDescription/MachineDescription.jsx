
import styles from './MachineDescription.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
const MachineDescription = () => {
  const id = 1;
const [data,setData] =useState("");
const [formattedDate, setFormattedDate] = useState("");
useEffect(() => {
  if (id) {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://wrk.acronex.com/api/challenge/machines/${id}`);
        setData(response.data);


  
        const rawDate = new Date(data.last_update);
        const formatted = format(rawDate, 'dd/MM/yyyy HH:mm:ss');
        setFormattedDate(formatted);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }
}, [id]);
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
            <div className={`${styles.leftGraphics} `}>
              <div className={styles.indicadorName}>
                <p>Taponamiento</p>
              </div>
              <div className={styles.indicadorValue}>
                <p className={styles.valueBold}> %</p>
              </div>
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
                  <td>17.6 °C</td>
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
                  <td>20 km/h</td>
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
