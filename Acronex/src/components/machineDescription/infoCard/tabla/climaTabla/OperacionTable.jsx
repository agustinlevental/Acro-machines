
import styles from "../../../machineDescription.module.css";

function OperacionTable({ data }) {
  return (
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
          <td>{data.data.operación.presión || "-"}</td>
        </tr>
        <tr>
          <td>Producto / hectárea</td>
          <td>{data.data.operación["producto / hectarea"] || "-"}</td>
        </tr>
        <tr>
          <td>Ancho</td>
          <td>{data.data.general.ancho}</td>
        </tr>
      </tbody>
    </table>
  );
}


export default OperacionTable;
