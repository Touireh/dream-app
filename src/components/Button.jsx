import styles from '../styles/button.module.css';
import { checkIP } from '@/utils/fetchIP'; 

const Button = () => {
  return (
    <div className={styles.btnContainer}>
      <button onClick={checkIP} className={styles.btnPrimary}>
        Exprimer mes rêves
      </button>
    </div>
  );
};

export default Button;