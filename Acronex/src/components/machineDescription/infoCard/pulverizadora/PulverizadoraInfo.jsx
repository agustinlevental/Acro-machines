import React from "react";
import PropTypes from "prop-types";
import cardStyles from "../../../card/card.module.css"; 
import styles from "../../machineDescription.module.css"; 

function PulverizadoraInfo({ data, getClassByValue, calidad, getClassForCalidad }) {
  return (
    <div>
      <div className={cardStyles.row}>
        <div
          className={`${styles.rectangle} ${getClassByValue(
            data.data.indicadores.taponamiento
          )}`}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitle}>Taponamiento</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {Math.floor(data.data.indicadores.taponamiento * 100)}%
            </p>
          </div>
        </div>

        <div
          className={`${styles.rectangle} ${getClassByValue(
            data.data.indicadores.evaporacion
          )}`}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitle}>Evaporación</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {Math.floor(data.data.indicadores.evaporacion * 100)}%
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
            <p className={cardStyles.cardTitle}>Perdida p. viento</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {Math.floor(data.data.indicadores.deriva * 100)}%
            </p>
          </div>
        </div>
        <div
          className={`${styles.rectangle} ${getClassForCalidad(
            calidad
          )}`}
        >
          <div className={cardStyles.indicadorName}>
            <p
              className={`${cardStyles.cardTitle} ${
                calidad < 100 ? cardStyles.blackCalidad : ""
              }`}
            >
              Calidad
            </p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p
              className={`${cardStyles.valueBold} ${
                calidad < 100 ? cardStyles.blackCalidad : ""
              }`}
            >
              {calidad}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default PulverizadoraInfo;
