import React from "react";
import PropTypes from "prop-types";
import cardStyles from "../../../card/card.module.css"; 
import styles from "../../machineDescription.module.css"; 

function CosechadoraInfo({ data }) {
  return (
    <div>
      <div className={cardStyles.row}>
        <div className={`${styles.rectangle} `}>
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitleCosechadora}>
              Tipo de cultivo
            </p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBoldCosechadora}>
              {data.data.indicadores.cultivo}
            </p>
          </div>
        </div>

        <div className={`${styles.rectangle} `}>
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitleCosechadora}>
              Humedad grano
            </p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBoldCosechadora}>
              {Math.floor(data.data.indicadores.humedad_grano)}%
            </p>
          </div>
        </div>
      </div>
      <div className={cardStyles.row}>
        <div
          className={`${styles.rectangle} ${cardStyles.moving} `}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitle}>Rinde húmedo</p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBold}>
              {Math.floor(data.data.indicadores.rinde_humedo)}
            </p>
          </div>
        </div>
        <div
          className={`${styles.rectangle} ${cardStyles.rindeSeco} `}
        >
          <div className={cardStyles.indicadorName}>
            <p className={cardStyles.cardTitleCosechadora}>
              Rinde seco
            </p>
          </div>
          <div className={cardStyles.indicadorValue}>
            <p className={cardStyles.valueBoldCosechadora}>
              {Math.floor(data.data.indicadores.rinde_seco)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CosechadoraInfo;
