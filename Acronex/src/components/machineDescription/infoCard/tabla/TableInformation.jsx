import React from "react";
import PropTypes from "prop-types";
import styles from "../../../machineDescription/machineDescription.module.css";
import GeneralTable from "./generalTabla/GeneralTable"; // Importa el componente GeneralTable
import ClimaTable from "./climaTabla/ClimaTable"; // Importa el componente ClimaTable
import OperacionTable from "./climaTabla/OperacionTable"; // Importa el componente OperacionTable

function TableInformation({ data }) {
  return (
    <div className={styles.rigthInformation}>
      <GeneralTable data={data} />
      <ClimaTable data={data} /> 
      <OperacionTable data={data} /> 
    </div>
  );
}

TableInformation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TableInformation;

