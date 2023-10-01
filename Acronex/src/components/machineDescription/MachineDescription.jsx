import styles from "./MachineDescription.module.css";
import cardStyles from "../card/card.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { getClassByValue, getClassForCalidad } from "../card/card";

const MachineDescription = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [calidad, setCalidad] = useState(0);
  const firstBreack = 0.0;
  const secondBreack = 0.1;
  const thirdBreack = 0.2;
  const fourthBreack = 0.35;
  const fifthBreack = 0.5;
  const sixthBreack = 1.0;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://wrk.acronex.com/api/challenge/machines/${id}`
          );
          const responseData = response.data;
          setData(responseData);
          console.log(responseData, "la data");
      

          // Realiza las operaciones con la data aquí
          // ...
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      };

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      const calidad = Math.floor((1 - data.data.indicadores.calidad) * 100);
      setCalidad(calidad);

      const formattedDateTime = format(
        new Date(data.last_update), // Convierte la fecha de string a objeto Date
        "dd/MM/yyyy HH:mm" // Define el formato deseado
      );
      setFormattedDate(formattedDateTime);

      console.log(data.last_update, "ultima fecha")
    }
    
    
  });

  if (!id) {
    // Si id aún no está definido, muestra "Cargando..."
    return <p>no carga el id...</p>;
  }

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
        return "";
    }
  };
  const getClassForCalidad = (calidad) => {
    console.log(calidad, "entro la calidad");
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
        return "";
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.machineContainer}>
        <div className={styles.titleAndNumber}>
          <div className={styles.title}>
            <p>{data.description}</p>
          </div>
          <div className={styles.number}>
            <p style={{ color: "#706f6f" }}>383</p>
          </div>
        </div>
        {data ? (
          <div className={styles.descriptionContainer}>
            <div className={styles.leftInformation}>
              <div className={styles.indicadores}>
                {data.class === "Pulverizadora" ? (
                  <div>
                    <div className={cardStyles.row}>
                      <div
                        className={`${styles.rectangle} ${getClassByValue(
                          data.data.indicadores.taponamiento
                        )}`}
                      >
                        <div className={cardStyles.indicadorName}>
                          <p className={cardStyles.cardTitle}>
                            Taponamiento
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBold}>
                            
                            {Math.floor(data.data.indicadores.taponamiento*100)}%
                          </p>
                        </div>
                      </div>

                      <div
                        className={`${styles.rectangle} ${getClassByValue(
                          data.data.indicadores.evaporacion
                        )}`}
                      >
                        <div className={cardStyles.indicadorName}>
                          <p className={cardStyles.cardTitle}>
                            Evaporación
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBold}>
                            {" "}
                            {Math.floor(data.data.indicadores.evaporacion*100)}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={cardStyles.row}>
                      <div
                        className={`${styles.rectangle} ${getClassByValue(
                          data.data.indicadores.deriva
                        )}`}
                      >
                        <div className={cardStyles.indicadorName}>
                          <p className={cardStyles.cardTitle}>
                            Perdida p. viento
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBold}>
                            {" "}
                            {Math.floor(data.data.indicadores.deriva*100)}%
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles.rectangle} ${getClassForCalidad(
                          calidad
                        )}`}
                      >
                        <div className={cardStyles.indicadorName}>
                        <p className={`${cardStyles.cardTitle} ${calidad < 100 ? cardStyles.blackCalidad : ""}`}>Calidad</p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={`${cardStyles.valueBold} ${calidad < 100 ? cardStyles.blackCalidad : ""}`}>{calidad} %</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className={cardStyles.row}>
                      <div className={`${styles.rectangle} `}>
                        <div className={cardStyles.indicadorName}>
                          <p className={cardStyles.cardTitleCosechadora}>
                            Tipo de cultivo
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBoldCosechadora}>{data.data.indicadores.cultivo}</p>
                        </div>
                      </div>

                      <div className={`${styles.rectangle} `}>
                        <div className={cardStyles.indicadorName}>
                          
                          <p className={cardStyles.cardTitleCosechadora}>
                         
                            Humedad grano
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBoldCosechadora}> {
                     
                          Math.floor(data.data.indicadores.humedad_grano)}%</p>
                        </div>
                      </div>
                    </div>
                    <div className={cardStyles.row}>
                      <div
                        className={`${styles.rectangle} ${cardStyles.moving} `}
                      >
                        <div className={cardStyles.indicadorName}>
                          <p className={cardStyles.cardTitle}>
                            Rinde húmedo
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBold}>
                          {Math.floor(data.data.indicadores.rinde_humedo)}

                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles.rectangle} ${cardStyles.rindeSeco} `}
                      >
                        <div className={cardStyles.indicadorName}>
                          <p className={cardStyles.cardTitleCosechadora}>
                            Rinde seco
                          </p>
                        </div>
                        <div className={cardStyles.indicadorValue}>
                          <p className={cardStyles.valueBoldCosechadora}>   {Math.floor(data.data.indicadores.rinde_seco)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.leftSimpleInformation}>
              <div className={styles.textModule}>
                <div className={styles.textSeparation}>
                  <p className={styles.boldText}>Empresa</p>
                </div>
              
                <div className={styles.textSeparation}>
                  <p className={styles.blueText}>{data.company}</p>
                </div>
                </div>
                <div className={styles.textModule}>
                <div className={styles.textSeparation}>
                  <p className={styles.boldText}>Clase</p>
                </div>
                <div className={styles.textSeparation}>
                  <p>{data.class}</p>
                </div>
                </div>


                <div className={styles.textModule}>
                <div className={styles.textSeparation}>
                  <p className={styles.boldText}>Estado</p>
                </div>
                <div className={styles.textSeparation}>
                  <div
                    className={`${cardStyles.status} ${
                      data.moving == true
                        ? cardStyles.moving
                        : cardStyles.stoped
                    }`}
                  ></div>
                  <p>{`${data.moving ? "En movimiento" : "Parado"}`}</p>
                </div>
                </div>

                <div className={styles.textModule}>
                <div className={styles.textSeparation}>
                  <p className={styles.boldText}>Última actualización</p>
                </div>
                <div className={styles.textSeparation}>
                  <p>{formattedDate}</p>
                </div>
                </div>

      
              </div>
            </div>
            <div className={styles.rigthInformation}>
              <table className={styles.table}>
                <thead className={styles.tableThead}>
                  <tr>
                    <th colSpan="2" className={styles.tableTitle}>
                      General
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cosechando</td>
                    <td>{data.working ? "si" : "no"}</td>
                  </tr>
                  <tr>
                    <td>Batería interna</td>
                    <td>{data.data.general["batería interna"]}</td>
                  </tr>
                  <tr>
                    <td>Batería vehículo</td>
                    <td>{data.data.general["batería vehiculo"]}</td>
                  </tr>
                  {/* <tr>
                    <td>Uso combustible</td>
                    <td>Dato no encontrado en la API</td>
                  </tr> */}
                </tbody>
             
              </table>
              
{data.data.clima?(              <table className={styles.table}>
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
              </table>):null}
              <table className={`${styles.table} ${styles.lastTable}`}>
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
                    <td>{data.data.operación.presión||"-"}</td>
                  </tr>
                  <tr>
                    <td>Producto / hectárea</td>
                    <td>{data.data.operación["producto / hectarea"]||"-"}</td>
                  </tr>
                  <tr>
                    <td>Ancho</td>
                    <td>{data.data.general.ancho}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>cargando</p>
        )}
      </div>
    </div>
  );
};

export default MachineDescription;
