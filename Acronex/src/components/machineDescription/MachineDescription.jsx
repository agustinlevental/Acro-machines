import styles from "./MachineDescription.module.css";
import cardStyles from "../card/card.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getClassByValue, getClassForCalidad } from "../../functions/functions";
import InfoCard from "./infoCard/InfoCard";

const MachineDescription = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [calidad, setCalidad] = useState(0);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://localhost:44349/api/Machines/${id}`
          );
          const responseData = response.data;
          setData(responseData);
        } catch (error) {}
      };

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (data) {
    
      const calidad = Math.floor((1 - data.calidad) * 100);
      setCalidad(calidad);

      // const formattedDateTime = format(
      //   new Date(data.last_update),
      //   "dd/MM/yyyy HH:mm"
      // );
      // setFormattedDate(formattedDateTime);
    }
  },[data]);

  return (
    <div className={styles.center}>
      <Link to="/machines" className={styles.goBackLink}>
        <ArrowBackIcon sx={{ width: 15, height: 15 }} /> Volver
      </Link>
      <div className={styles.machineContainer}>
        <div className={styles.titleAndNumber}>
          <div className={styles.title}>
            <p>{data.description}</p>
          </div>
          <div className={styles.number}>
            <p className={styles.pNumber}>{data.chassis}</p>
          </div>
        </div>

        {data ? (
          <InfoCard
            data={data}
            calidad={calidad}
            // formattedDate={formattedDate}
            getClassByValue={getClassByValue}
            getClassForCalidad={getClassForCalidad}
          />
        ) : (
          <p>cargando</p>
        )}
      </div>
    </div>
  );
};

export default MachineDescription;