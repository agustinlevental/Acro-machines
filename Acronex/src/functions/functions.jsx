import { FIRSTBREACK,SECONDBREACK,THIRDBREACK,FOURTHBREACK,FIFTHBREACK,SIXTBREACK } from '../constants/constants';
import styles from '../components/card/Card.module.css';
export const getClassByValue = (value) => {
    switch (true) {
      case value === FIRSTBREACK:
        return styles.firstBreack;
      case value > FIRSTBREACK && value <= SECONDBREACK:
        return styles.secondBreack;
      case value > SECONDBREACK && value <= THIRDBREACK:
        return styles.thirdBreack;
      case value > THIRDBREACK && value <= FOURTHBREACK:
        return styles.fourthBreack;
      case value > FOURTHBREACK && value <= FIFTHBREACK:
        return styles.fifthBreack;
      case value > FIFTHBREACK && value <= SIXTBREACK:
        return styles.sixthBreack;
      default:
        return ''; 
    }
  };
  
  export const getClassForCalidad = (calidad) => {
  
    switch (true) {
      case calidad === 100:
        return styles.firstBreack;
      case calidad >= 80 && calidad <= 95:
        return styles.moving;
      case calidad > 50 && calidad < 80:
        return styles.regularBreack;
      case calidad < 50:
        return styles.sixthBreack;
      default:
        return ''; 
    }
  };