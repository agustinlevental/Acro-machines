import React from "react";
import PropTypes from "prop-types";
import styles from "../../machineDescription.module.css";
import cardStyles from "../../../card/card.module.css";

function MachineSimpleInformation({ data, formattedDate }) {
 
  return (
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
          <p>{data.type}</p>
        </div>
      </div>
      <div className={styles.textModule}>
        <div className={styles.textSeparation}>
          <p className={styles.boldText}>Estado</p>
        </div>
        <div className={styles.textSeparation}>
          <div
            className={`${cardStyles.status} ${
              data.moving == true ? cardStyles.moving : cardStyles.stopped
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
          {/* <p>{formattedDate}</p> */}
        </div>
      </div>
    </div>
  );
}



export default MachineSimpleInformation;
