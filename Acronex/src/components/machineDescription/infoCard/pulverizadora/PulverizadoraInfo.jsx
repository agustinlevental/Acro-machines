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
            data.taponamiento
          )}`}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitle}>Taponamiento</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {data.taponamiento}%
            </p>
          </div>
        </div>

        <div
          className={`${styles.rectangle} ${getClassByValue(
             data.evaporacion
          )}`}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitle}>Evaporación</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {Math.floor( data.evaporacion)}%
            </p>
          </div>
        </div>
      </div>
      <div className={cardStyles.row}>
        <div
          className={`${styles.rectangle} ${getClassByValue(
             data.deriva
          )}`}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitle}>Perdida p. viento</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {Math.floor( data.deriva )}%
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
               ""
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
              {data.calidad}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default PulverizadoraInfo;
