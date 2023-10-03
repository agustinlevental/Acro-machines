
import styles from "../../../machineDescription.module.css";

function ClimaTable({ data }) {
  return (
    <>
      {data.data.clima ? (
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
      ) : null}
    </>
  );
}


export default ClimaTable;
