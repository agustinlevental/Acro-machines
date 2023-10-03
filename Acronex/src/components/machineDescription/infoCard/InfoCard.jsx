
import styles from "../machineDescription.module.css"; 
import cardStyles from "../../card/card.module.css";
import PulverizadoraInfo from "./pulverizadora/PulverizadoraInfo";
import CosechadoraInfo from "./cosechadora/CosechadoraInfo";
import MachineSimpleInformation from "./machineSimpleInformation/MachineSimpleInformation";
import TableInfomation from "./tabla/TableInformation";

function InfoCard({ data, calidad, formattedDate, getClassByValue, getClassForCalidad }) {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.leftInformation}>
        <div className={styles.indicadores}>
        {data.class === "Pulverizadora" ? (
            <PulverizadoraInfo
              data={data}
              getClassByValue={getClassByValue}
              calidad={calidad}
              getClassForCalidad={getClassForCalidad}
            />
          ) : (
            <CosechadoraInfo data={data} />
          )}
        </div>

        <MachineSimpleInformation data={data} formattedDate={formattedDate} />
      </div>

     <TableInfomation data={data} />
    </div>
  );
}


export default InfoCard;
