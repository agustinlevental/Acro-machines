
import styles from "../../../machineDescription.module.css";

function ClimaTable({ data }) {
  return (
    <>

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
              <td>{data.temperatura}</td>
            </tr>
            <tr>
              <td>Humedad</td>
              <td>{data.humedad}</td>
            </tr>
            <tr>
              <td>Dirección del viento</td>
              <td>{data.direccionViento}</td>
            </tr>
            <tr>
              <td>Velocidad del viento</td>
              <td>{data.velocidadViento}</td>
            </tr>
          </tbody>
        </table>
    
    </>
  );
}


export default ClimaTable;
