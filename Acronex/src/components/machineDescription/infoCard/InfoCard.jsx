
import styles from "../machineDescription.module.css"; 
import cardStyles from "../../card/card.module.css";
import PulverizadoraInfo from "./pulverizadora/PulverizadoraInfo";
import CosechadoraInfo from "./cosechadora/CosechadoraInfo";
import MachineSimpleInformation from "./machineSimpleInformation/MachineSimpleInformation";
import TableInfomation from "./tabla/TableInformation";
import Indicators from "../../card/indicators/Indicators";

function InfoCard({ data, calidad, formattedDate, getClassByValue, getClassForCalidad }) {

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.leftInformation}>
        <div className={styles.indicadores}>
        {data.type === "Pulverizadora" ? (
           <Indicators machine={data} key={data.id} isDescriptionCard={true} />
          ) : (
            <Indicators machine={data} isDescriptionCard={true} />
          )}
        </div>

        <MachineSimpleInformation data={data} 
        formattedDate={formattedDate} 
        />
      </div>

     <TableInfomation data={data} />
    </div>
  );
}


export default InfoCard;
