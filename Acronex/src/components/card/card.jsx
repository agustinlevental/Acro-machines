import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useEffect } from "react";
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
      {machines.map((machine) => (
        <div key={machine.id} className={styles.statusAndName}>
          <div
            className={`${styles.status} ${
              machine?.moving === true ? styles.moving : styles.stopped
            }`}
          ></div>
          <div className={styles.nameAndDetail}>
            <p className={`${styles.truncateText}`}>
              {`(${machine.id}) ${machine.description}`}
            </p>
            <p>
              <span className={styles["blue-text"]}>{`${machine.company}`}</span>
            </p>
          </div>
        </div>
      ))}
    
        <Indicators machine={machine} key={machine.id} />
     
    </Link>
  );
};

export default Card;
