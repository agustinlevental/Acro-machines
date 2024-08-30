import styles from "../Card.module.css";
import {
  getClassByValue,
  getClassForCalidad,
} from "../../../functions/functions";

const IndicatorItem = ({ label, value, className }) => {
  const isHumedadGrano = label === "Humedad grano";
  const isRindeSeco = label === "Rinde seco";
  const isCalidad = label === "Calidad";
  return (
    <div className={`${styles.rectangle} `}>
      <div className={styles.indicadorName}>
        <p className={`${styles.cardTitle}`}>{label}</p>
      </div>
      <div className={styles.indicadorValue}>
      <p className={`${styles.valueBoldCosechadora} ${
  label !== "Rinde húmedo" && label !== "Rinde seco" ? getClassByValue(value) :
  styles.rinde
} ${isCalidad ? getClassForCalidad(value) : ""}`}
>
  {value}
</p>
      </div>
   
    </div>
  );
};

const Indicators = ({ machine }) => {
  const commonProps = (label, value) => ({
    label,
    value,
    className: label !== "Calidad"
      ? getClassByValue(value)
      : getClassForCalidad(value)
  });
  

  const isPulverizadora = machine.type === "Pulverizadora";

  return (
    <div className={styles.indicadores}>
      {isPulverizadora ? (
        <div>
          <div className={styles.row}>
            <IndicatorItem
              {...commonProps("Taponamiento", machine.taponamiento)}
            />
            <IndicatorItem
              {...commonProps("Evaporación", machine.evaporacion)}
            />
          </div>
          <div className={styles.row}>
            <IndicatorItem
              {...commonProps("Perdida p. viento", machine.deriva)}
            />
            <IndicatorItem {...commonProps("Calidad", machine.calidad)} />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.row}>
            <IndicatorItem
              {...commonProps("Tipo de cultivo", machine.cultivo)}
            />
            <IndicatorItem
              {...commonProps("Humedad grano", machine.humedadGrano)}
            />
          </div>
          <div className={styles.row}>
            <IndicatorItem
              label="Rinde húmedo"
              value={machine.rindeHumedo}
              className={`${styles.rectangle} ${styles.moving}`}
            />
            <IndicatorItem
              label="Rinde seco"
              value={machine.rindeSeco}
              className={`${styles.rectangle} ${styles.rindeSeco}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicators;
