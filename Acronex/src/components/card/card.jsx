import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useEffect } from "react";
import { getClassByValue, getClassForCalidad } from "../../functions/functions";
import Indicators from "./indicators/Indicators";

const Card = ({ machine }) => {
  const isObject = typeof machine === "object";
  const machines = isObject ? [machine] : machine;

  return (
    <Link
      to={`/machines/${machines[0].id}`}
      state={{ id: machines[0].id }}
      className={styles.card}
      style={{ textDecoration: "none", 
      color: "inherit"}}
    >
      {machines.map((machineItem) => (
        <div key={machineItem.id} className={styles.statusAndName}>
          <div
            className={`${styles.status} ${
              machineItem?.moving === true ? styles.moving : styles.stopped
            }`}
          ></div>
          <div className={styles.nameAndDetail}>
            <p className={`${styles.truncateText}`}>
              {`(${machineItem.id}) ${machineItem.description}`}
            </p>
            <p>
              <span className={styles["blue-text"]}>{`${machineItem.company}`}</span>
            </p>
          </div>
        </div>
      ))}
      {machines.map((machineItem) => (
        <Indicators machineItem={machineItem} key={machineItem.id} />
      ))}
    </Link>
  );
};

export default Card;
