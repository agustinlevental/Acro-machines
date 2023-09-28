
import Card from '../card/card';
import styles from './CardsContainer.module.css'; 

const CardsContainer = () => {
  return (
    <div className={styles.Center}>
        
    <div className={styles.CardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </div>
  );
};

export default CardsContainer;
