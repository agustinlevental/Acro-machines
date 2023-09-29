import { useState, useEffect } from 'react';
import Card from '../card/card';
import styles from './CardsContainer.module.css';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CardsContainer = ({searchValue}) => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Página actual, por defecto 1
  const machinesPerPage = 6; // Cantidad de máquinas por página

  useEffect(() => {
    axios.get('https://wrk.acronex.com/api/challenge/machines/')
      .then((response) => {
        setMachines(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log('Datos de máquinas cargados:', machines);
    }
  }, [machines, loading]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredMachines = machines.filter((machine) =>
    machine.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    machine.id==searchValue
  );

  if (loading) {
    return <p>Cargando...</p>;
  }

 
  const startIndex = (page - 1) * machinesPerPage;
  const endIndex = startIndex + machinesPerPage;

  return (
    <div className={styles.Center}>
      <div className={styles.CardsContainer}>
        {filteredMachines.slice(startIndex, endIndex).map((machine) => (
          <Card key={machine.id} machine={machine} />
        ))}
      </div>
      <div className={styles.PaginationContainer}>
        <Stack spacing={2} justifyContent="center">
          <Pagination
            count={Math.ceil(filteredMachines.length / machinesPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </div>
    </div>
  );
};

export default CardsContainer;
