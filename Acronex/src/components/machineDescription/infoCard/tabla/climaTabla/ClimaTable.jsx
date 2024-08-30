
import styles from "../../../machineDescription.module.css";

function ClimaTable({ data }) {
  return (
    <>
      {data.clima ? (
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
              <td>{data.clima["direccion viento"]}</td>
            </tr>
            <tr>
              <td>Velocidad del viento</td>
              <td>{data.clima["velocidad viento"]}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </>
  );
}


export default ClimaTable;
