import { useState, useEffect } from 'react';
import Card from '../card/card';
import styles from './CardsContainer.module.css';
import axios from 'axios';

const CardsContainer = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <p>Cargando...</p>; 
  }

  return (
    <div className={styles.Center}>
      <div className={styles.CardsContainer}>
        {machines.map((machine) => (
          <Card key={machine.id} machine={machine} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
