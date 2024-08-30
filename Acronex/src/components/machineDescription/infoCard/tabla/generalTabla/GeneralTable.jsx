
import styles from "../../../machineDescription.module.css";

function GeneralTable({ data }) {
  return (
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
          <td>{data.bateriaInterna}</td>
        </tr>
        <tr>
          <td>Batería vehículo</td>
          <td>{data.bateriaVehiculo}</td>
        </tr>
      </tbody>
    </table>
  );
}


export default GeneralTable;
