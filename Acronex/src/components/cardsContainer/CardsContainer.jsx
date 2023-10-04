import { useState, useEffect } from "react";
import Card from "../card/card";
import styles from "./CardsContainer.module.css";
import axios from "axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLoaderData } from "react-router-dom";

export function loader({params, request}){
  const url = new URL(request.url);
  const searchValue = url.searchParams.get("searchValue") || "";
  return searchValue;
}

const CardsContainer = () => {
  let searchValue = useLoaderData();
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const machinesPerPage = 6;

  useEffect(() => {
    axios
      .get(`https://wrk.acronex.com/api/challenge/machines/?q=${searchValue}`)
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setMachines(data);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [searchValue]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {

    if (machines.length <= 6) {
      setPage(1);
    }
  }, [machines]);
  const handleNextPage = () => {
    if (page < Math.ceil(machines.length / machinesPerPage)) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  const startIndex = (page - 1) * machinesPerPage;
  const endIndex = startIndex + machinesPerPage;

  return (
    <div className={styles.Center}>
      <div className={styles.CardsAndPaginationContainer}>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          <NavigateBeforeIcon />
        </button>
        <div className={styles.CardsContainer}>
          {machines.slice(startIndex, endIndex).map((machine) => (
            <Card key={machine.id} machine={machine} />
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={page === Math.ceil(machines.length / machinesPerPage)}
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default CardsContainer;
