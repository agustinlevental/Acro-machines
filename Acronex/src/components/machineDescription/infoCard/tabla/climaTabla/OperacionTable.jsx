
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
          <td>{data.velocidad}</td>
        </tr>
        <tr>
          <td>Presión</td>
          <td>{data.presión || "-"}</td>
        </tr>
        <tr>
          <td>Producto / hectárea</td>
          <td>{data.productoPorHectarea || "-"}</td>
        </tr>
        <tr>
          <td>Ancho</td>
          <td>{data.ancho}</td>
        </tr>
      </tbody>
    </table>
  );
}


export default OperacionTable;
