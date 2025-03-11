
import styles from '../styles/button.module.css';
import { checkIP } from '@/pages/api/fetchIP';

const Button = () =>{
 return(
    <div className={styles.buttonContainer}>
        <button onClick={checkIP} className={styles.ctaButton}>
          Exprimer mes rêves
        </button>
      </div>
      
)}
export default Button;