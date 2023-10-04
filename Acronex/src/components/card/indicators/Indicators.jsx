import styles from "../Card.module.css";
import {
  getClassByValue,
  getClassForCalidad,
} from "../../../functions/functions";
const IndicatorItem = ({ label, value, className }) => {
  const isHumedadGrano = label === "Humedad grano";
  const isRindeSeco = label === "Rinde seco";

  
  const computedValue = label === "Calidad" ? (100 - value) : value;

  return (
    <div className={`${styles.rectangle} ${className}`}>
      <div className={styles.indicadorName}>
        <p
          className={`${
            label !== "Calidad" && !isHumedadGrano && !isRindeSeco
              ? styles.cardTitle
              : styles.cardTitleCosechadora
          }`}
        >
          {label}
        </p>
      </div>
      <div className={styles.indicadorValue}>
        {label !== "Rinde húmedo" && label !== "Rinde seco" ? (
          <>
            <p
              className={`${
                label !== "Calidad" && !isHumedadGrano
                  ? styles.valueBold
                  : styles.valueBoldCosechadora
              }`}
            >
              {computedValue}%
            </p>
          </>
        ) : (
          <p
            className={`${
              isRindeSeco ? styles.valueBoldCosechadora : styles.valueBold
            }`}
          >
            {computedValue}
          </p>
        )}
      </div>
    </div>
  );
};


const Indicators = ({ machineItem }) => {
  const commonProps = (label, value) => ({
    label,
    value: Math.floor(
      Math.abs(
        value ||
          machineItem.data?.indicadores[label.replace(/ /g, "_").toLowerCase()]
      ) * 100
    ),
    className: getClassByValue(
      value ||
        machineItem.data?.indicadores[label.replace(/ /g, "_").toLowerCase()]
    ),
  });

  const isPulverizadora =
    machineItem.type === "Pulverizadora" ||
    machineItem.class === "Pulverizadora";

  return (
    <div className={styles.indicadores}>
      {isPulverizadora ? (
        <div>
          <div className={styles.row}>
            <IndicatorItem
              {...commonProps(
                "Taponamiento",
                machineItem?.indicadores?.taponamiento
              )}
            />
            <IndicatorItem
              {...commonProps(
                "Evaporación",
                machineItem?.indicadores?.evaporacion
              )}
            />
          </div>
          <div className={styles.row}>
            <IndicatorItem
              {...commonProps(
                "Perdida p. viento",
                machineItem?.indicadores?.deriva
              )}
            />
            <IndicatorItem
              {...commonProps("Calidad", machineItem?.indicadores?.calidad)}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.row}>
            <div className={styles.rectangle}>
              <div className={styles.indicadorName}>
                <p className={styles.cardTitleCosechadora}>Tipo de cultivo</p>
              </div>
              <div className={styles.indicadorValue}>
                <p className={styles.valueBoldCosechadora}>
                  {machineItem?.indicadores?.cultivo ||
                    machineItem?.data?.indicadores?.cultivo}
                </p>
              </div>
            </div>
            <IndicatorItem
              {...commonProps(
                "Humedad grano",
                machineItem?.indicadores?.humedad_grano
              )}
            />
          </div>
          <div className={styles.row}>
            <IndicatorItem
              label="Rinde húmedo"
              value={machineItem?.indicadores?.rinde_humedo}
              className={`${styles.rectangle} ${styles.moving}`}
            />
            <IndicatorItem
              label="Rinde seco"
              value={machineItem?.indicadores?.rinde_seco}
              className={`${styles.rectangle} ${styles.rindeSeco}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicators;
